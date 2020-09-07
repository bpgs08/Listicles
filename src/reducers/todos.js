import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    text: "Moving your team from HipChat to Slack",
    completed: false,
    date: new Date(2020, 11, 18),
  },
  {
    id: uuid(),
    text: "CFO Series: The 3 Mistakes that Crushed Zirtual Overnight",
    completed: false,
    date: new Date(2020, 11, 26),
  },
  {
    id: uuid(),
    text: "13 Gifts to Get Your Accountants for the Holidays",
    completed: false,
    date: new Date(Date.now() - 864e5),
  },
  {
    id: uuid(),
    text: "Strategic Finance for Remote Teams: Scaling Purchases",
    completed: false,
    date: new Date(),
  },

  {
    id: uuid(),
    text: "Joy Finance Newsletter",
    completed: false,
    date: new Date(2021, 12, 1),
  },
];

const todos = (
  state = { new: [], all: initialState, completed: [] },
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        new: [
          ...state.new,
          { id: action.id, text: action.text, completed: false },
        ],
      };
    case "MARK_ACTIVE":
      let reverseItemForNew;
      let reverseItemForAll;
      const completedList = state.completed.reduce((total, todo) => {
        if (todo.id === action.id) {
          if (todo.date) {
            reverseItemForAll = { ...todo, completed: !todo.completed };
          } else {
            reverseItemForNew = reverseItemForAll = {
              ...todo,
              completed: !todo.completed,
            };
          }
        } else {
          total.push({ ...todo });
        }
        return total;
      }, []);
      if (reverseItemForNew) {
        return {
          ...state,
          new: [...state.new, reverseItemForNew],
          completed: [...completedList],
        };
      } else {
        return {
          ...state,
          all: [...state.all, reverseItemForAll],
          completed: [...completedList],
        };
      }
    case "MARK_COMPLETE_FROM_NEW":
      let completedItem;
      const newList = state.new.reduce((total, todo) => {
        if (todo.id === action.id) {
          completedItem = { ...todo, completed: !todo.completed };
        } else {
          total.push({ ...todo });
        }
        return total;
      }, []);
      return {
        ...state,
        new: newList,
        completed: [...state.completed, completedItem],
      };
    case "MARK_COMPLETE_FROM_ALL":
      let completedHolder;
      const allList = state.all.reduce((total, todo) => {
        if (todo.id === action.id) {
          completedHolder = { ...todo, completed: !todo.completed };
        } else {
          total.push({ ...todo });
        }
        return total;
      }, []);

      return {
        ...state,
        all: allList,
        completed: [...state.completed, completedHolder],
      };
    case "SORT_BY_DUE_DATE":
      if (!state.sorted) {
        const sortedAll = state.all.slice().sort((a, b) => a.date - b.date);
        return {
          ...state,
          all: sortedAll,
          sorted: true,
        };
      } else {
        const sortedSwitchAll = !state.sorted
          ? state.all.slice().sort((a, b) => a.date - b.date)
          : state.all.slice().sort((a, b) => b.date - a.date);
        return {
          ...state,
          all: sortedSwitchAll,
          sorted: !state.sorted,
        };
      }
    default:
      return state;
  }
};

export default todos;

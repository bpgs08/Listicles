const initialState = [
  {
    id: -1,
    text: "13 Gifts to Get Your Accountants for the Holidays",
    completed: false,
    date: new Date(Date.now() - 864e5),
  },
  {
    id: -2,
    text: "Strategic Finance for Remote Teams: Scaling Purchases",
    completed: false,
    date: new Date(),
  },
  {
    id: -3,
    text: "Moving your team from HipChat to Slack",
    completed: false,
    date: new Date(2020, 11, 18),
  },
  {
    id: -4,
    text: "CFO Series: The 3 Mistakes that Crushed Zirtual Overnight",
    completed: false,
    date: new Date(2020, 11, 26),
  },
  {
    id: -5,
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
    case "TOGGLE_TODO":
      console.log(action);
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "MARK_ACTIVE":
      console.log(action);
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "MARK_COMPLETE_FROM_NEW":
      console.log(action);
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "MARK_COMPLETE_FROM_ALL":
      console.log(action);
      const completedItem = [];
      const newAll = state.all.reduce((total, todo) => {
        if (todo.id === action.id) {
          completedItem.push({ ...todo, completed: !todo.completed });
        } else {
          total.push({ ...todo });
        }
        return total;
      }, []);

      return {
        ...state,
        all: newAll,
        completed: [...state.completed, ...completedItem],
      };
    default:
      return state;
  }
};

export default todos;

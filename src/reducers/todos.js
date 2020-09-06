const today = new Date();

const initialState = [
  {
    id: -1,
    text: "13 Gifts to Get Your Accountants for the Holidays",
    completed: false,
    date: today,
  },
  {
    id: -2,
    text: "Strategic Finance for Remote Teams: Scaling Purchases",
    completed: false,
  },
  { id: -3, text: "Moving your team from HipChat to Slack", completed: false },
  {
    id: -4,
    text: "CFO Series: The 3 Mistakes that Crushed Zirtual Overnight",
    completed: false,
  },
  { id: -5, text: "Joy Finance Newsletter", completed: false },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;

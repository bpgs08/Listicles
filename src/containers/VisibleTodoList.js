import { connect } from "react-redux";
import {
  markActive,
  markCompleteFromNew,
  markCompleteFromAll,
} from "../actions";
import TodoList from "../components/todoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  markActive: (id) => dispatch(markActive(id)),
  markCompleteFromNew: (id) => dispatch(markCompleteFromNew(id)),
  markCompleteFromAll: (id) => dispatch(markCompleteFromAll(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

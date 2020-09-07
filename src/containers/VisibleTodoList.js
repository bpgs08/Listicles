import { connect } from "react-redux";
import {
  markActive,
  markCompleteFromNew,
  markCompleteFromAll,
  sortByDueDate,
} from "../actions";
import TodoList from "../components/todoList";

const mapStateToProps = (state) => ({
  newTodos: state.todos.new,
  allTodos: state.todos.all,
  completedTodos: state.todos.completed,
  sorted: state.todos.sorted,
});

const mapDispatchToProps = {
  markActive,
  markCompleteFromNew,
  markCompleteFromAll,
  sortByDueDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

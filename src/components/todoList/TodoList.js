import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Todo from "../todo";
import HeaderElements from "../headerElements";
import { colors, space, media } from "../../utils/theme";

const TodoList = React.memo(({ todos, toggleTodo }) => {
  const [showCompleted, setShowCompleted] = useState(false);
  const newTodos = [];
  const completedTodos = [];
  const allTodos = todos.reduce((result, value) => {
    if (!value.date && !value.completed) {
      newTodos.push(value);
    } else if (value.completed) {
      completedTodos.push(value);
    } else {
      result.push(value);
    }
    return result;
  }, []);
  const hideCompletedTasks = () => {
    setShowCompleted(!showCompleted);
  };
  return (
    <TodoListContainer>
      {newTodos.length > 0 && (
        <>
          <HeaderElements type={8} bold={true} color={colors.purple}>
            NEW TASKS
          </HeaderElements>
          <ul>
            {newTodos.map((todo) => (
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
              />
            ))}
          </ul>
        </>
      )}

      {allTodos.length > 0 && (
        <>
          <HeaderElements type={8} bold={true} color={colors.purple}>
            ALL TASKS
          </HeaderElements>
          <ul>
            {allTodos.map((todo) => (
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
              />
            ))}
          </ul>
        </>
      )}

      {completedTodos.length > 0 && (
        <>
          <div onClick={hideCompletedTasks}>
            {showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}
          </div>
          {showCompleted && (
            <ul>
              {completedTodos.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onClick={() => toggleTodo(todo.id)}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </TodoListContainer>
  );
});

const TodoListContainer = styled.div`
  max-width: 300px;
  ${media.tablet`
    max-width: 700px;
  `}
  margin: ${space[4]} auto 0px auto;
`;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;

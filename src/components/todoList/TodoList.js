import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Todo from "../todo";
import HeaderElements from "../headerElements";
import { colors, space, media } from "../../utils/theme";

const TodoList = React.memo(
  ({ todos, markActive, markCompleteFromNew, markCompleteFromAll }) => {
    const [showCompleted, setShowCompleted] = useState(false);
    const newTodos = [];
    const completedTodos = [];
    // const allTodos = todos.reduce((result, value) => {
    //   if (!value.date && !value.completed) {
    //     newTodos.push(value);
    //   } else if (value.completed) {
    //     completedTodos.push(value);
    //   } else {
    //     result.push(value);
    //   }
    //   return result;
    // }, []);
    const hideCompletedTasks = () => {
      setShowCompleted(!showCompleted);
    };
    console.log(todos);
    return (
      <TodoListContainer>
        {/* {todos.new.length > 0 && (
          <>
            <TodoTitle type={8} bold={true} color={colors.purple}>
              NEW TASKS
            </TodoTitle>
            <ul>
              {todos.new.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onClick={() => markCompleteFromNew(todo.id)}
                />
              ))}
            </ul>
          </>
        )} */}

        {todos.all.length > 0 && (
          <>
            <TodoTitle type={8} bold={true} color={colors.purple}>
              ALL TASKS
            </TodoTitle>
            <ul>
              {todos.all.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onClick={() => markCompleteFromAll(todo.id)}
                />
              ))}
            </ul>
          </>
        )}

        {todos.completed.length > 0 && (
          <>
            <HideAndShow onClick={hideCompletedTasks}>
              {showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}
            </HideAndShow>
            {showCompleted && (
              <ul>
                {todos.completed.map((todo) => (
                  <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => markActive(todo.id)}
                  />
                ))}
              </ul>
            )}
          </>
        )}
      </TodoListContainer>
    );
  }
);

const TodoTitle = styled(HeaderElements)`
  margin-bottom: ${space[2]};
`;

const HideAndShow = styled.div`
  text-align: center;
  margin-bottom: ${space[2]};
  cursor: pointer;
  text-decoration: underline;
  color: ${colors.grey};
`;

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

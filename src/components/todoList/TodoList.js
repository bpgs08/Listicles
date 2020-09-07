import React, { useState } from "react";
import styled from "styled-components";
import Todo from "../todo";
import SortImage from "../../assets/icons/sort-up-solid.svg";
import HeaderElements from "../headerElements";
import { colors, space, media } from "../../utils/theme";

const TodoList = React.memo(
  ({
    newTodos,
    allTodos,
    completedTodos,
    sorted,
    markActive,
    markCompleteFromNew,
    markCompleteFromAll,
    sortByDueDate,
  }) => {
    const [showCompleted, setShowCompleted] = useState(false);
    const hideCompletedTasks = () => {
      setShowCompleted(!showCompleted);
    };

    return (
      <TodoListContainer>
        {newTodos.length > 0 && (
          <>
            <TodoTitle type={8} bold={true} color={colors.purple}>
              NEW TASKS
            </TodoTitle>
            <ul>
              {newTodos.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onClick={() => markCompleteFromNew(todo.id)}
                />
              ))}
            </ul>
          </>
        )}

        {allTodos.length > 0 && (
          <>
            <FlexContainer>
              <TodoTitle type={8} bold={true} color={colors.purple}>
                ALL TASKS
              </TodoTitle>
              <SortByContainer
                onClick={sortByDueDate}
                SortImage={SortImage}
                sorted={sorted}
              >
                Sort by: Due Date
              </SortByContainer>
            </FlexContainer>
            <ul>
              {allTodos.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onClick={() => markCompleteFromAll(todo.id)}
                />
              ))}
            </ul>
          </>
        )}

        {completedTodos.length > 0 && (
          <>
            <HideAndShow onClick={hideCompletedTasks}>
              {showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}
            </HideAndShow>
            {showCompleted && (
              <ul>
                {completedTodos.map((todo) => (
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

const SortByContainer = styled.div`
  margin-left: auto;
  font-size: 14px;
  cursor: pointer;
  color: ${colors.purple};
  &:after {
    display: inline-block;
    content: " ";
    background-image: url(${SortImage});
    background-size: ${space[3]} ${space[3]};
    height: ${space[3]};
    width: ${space[3]};
    background-repeat: no-repeat;
    ${(props) =>
      !props.sorted ? `transform: rotate(180deg);top: 5%;` : `top: 25%;`};
    position: relative;
  }
`;

const FlexContainer = styled.div`
  display: flex;
`;

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

export default TodoList;

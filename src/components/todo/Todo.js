import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SquareRegular from "../../assets/icons/square-regular.svg";
import SquareCheckedRegular from "../../assets/icons/check-square-regular.svg";
import moment from "moment";
import { colors, space, media } from "../../utils/theme";

const Todo = React.memo(({ onClick, completed, text, date }) => (
  <LiItem
    onClick={onClick}
    completed={completed}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    <span>{text}</span>
    {date && <DateDisplay>{moment(date).format("MMM D")}</DateDisplay>}
  </LiItem>
));

const DateDisplay = styled.span`
  margin-left: auto;
`;

const LiItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-bottom: ${space[3]};
  margin-bottom: ${space[3]};
  border-bottom: 1px solid grey;
  &:before {
    display: inline-block;
    content: " ";
    background-image: ${(props) =>
      props.completed
        ? `url(${SquareCheckedRegular})`
        : `url(${SquareRegular})`};

    background-size: ${space[3]} ${space[3]};
    height: ${space[3]};
    width: ${space[3]};
    margin-right: ${space[2]};
  }
`;

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;

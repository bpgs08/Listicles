import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SquareRegular from "../../assets/icons/square-regular.svg";
import SquareCheckedRegular from "../../assets/icons/check-square-regular.svg";
import CalendarBlack from "../../assets/icons/calendar-regular-black.svg";
import CalendarOrange from "../../assets/icons/calendar-regular-orange.svg";
import CalendarGrey from "../../assets/icons/calendar-regular-grey.svg";
import moment from "moment";
import { space, colors } from "../../utils/theme";

const Todo = React.memo(({ onClick, completed, text, date }) => {
  const itemDate = moment(date).format("MMM D");
  const isToday = itemDate === moment(new Date()).format("MMM D");
  return (
    <LiItem onClick={onClick} completed={completed}>
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </span>
      {date && (
        <DateDisplay isToday={isToday} completed={completed}>
          {isToday ? "Today" : itemDate}
        </DateDisplay>
      )}
    </LiItem>
  );
});

const DateDisplay = styled.span`
  margin-left: auto;
  text-decoration: none;
  display: flex;
  color: ${(props) => {
    if (!props.completed && props.isToday) {
      return `orange`;
    } else if (props.completed) {
      return `${colors.grey}`;
    } else {
      return `black`;
    }
  }};
  &:after {
    display: inline-block;
    content: " ";
    background-image: ${(props) => {
      if (!props.completed && props.isToday) {
        return `url(${CalendarOrange})`;
      } else if (props.completed) {
        return `url(${CalendarGrey})`;
      } else {
        return `url(${CalendarBlack})`;
      }
    }};
    background-size: ${space[3]} ${space[3]};
    height: ${space[3]};
    width: ${space[3]};
    margin-left: ${space[1]};
    background-repeat: no-repeat;
  }
`;

const LiItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-bottom: ${space[3]};
  margin-bottom: ${space[3]};
  border-bottom: 1px solid ${colors.lightgrey};
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

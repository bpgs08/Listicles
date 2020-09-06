import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { colors, media, space } from "../utils/theme";
import styled from "styled-components";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <InputContainer
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <Input placeholder="Add a to-do" ref={(node) => (input = node)} />
        <InputButton type="submit">ADD</InputButton>
      </InputContainer>
    </div>
  );
};

const InputContainer = styled.form`
  max-width: 300px;
  display: flex;
  margin: 0 auto;
  ${media.tablet`
    max-width: 700px;
  `}
`;

const Input = styled.input`
  width: 100%;
  padding: ${space[2]};
  font-size: 16px;
  box-sizing: border-box;
  border: 0px;
  &:focus {
    outline: none;
  }
`;

const InputButton = styled.button`
  padding: ${space[2]};
  background: white;
  border: ${space[0]};
  cursor: pointer;
  color: ${colors.purple};
  &:focus {
    outline: none;
  }
`;

export default connect()(AddTodo);

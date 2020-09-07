import { v4 as uuid } from "uuid";
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: uuid(),
  text,
});

export const sortByDueDate = () => ({
  type: "SORT_BY_DUE_DATE",
});

export const markActive = (id) => ({
  type: "MARK_ACTIVE",
  id,
});

export const markCompleteFromNew = (id) => ({
  type: "MARK_COMPLETE_FROM_NEW",
  id,
});

export const markCompleteFromAll = (id) => ({
  type: "MARK_COMPLETE_FROM_ALL",
  id,
});

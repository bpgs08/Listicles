let nextTodoId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
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

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

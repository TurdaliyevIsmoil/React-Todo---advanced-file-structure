import React from "react";

function TodoListHead() {
  return (
    <div className="flex justify-between">
      <TodoListHeadCol className="w-24">N/r</TodoListHeadCol>
      <TodoListHeadCol className="grow">Description</TodoListHeadCol>
      <TodoListHeadCol className="w-40">Date</TodoListHeadCol>
      <TodoListHeadCol className="w-40">Status</TodoListHeadCol>
      <TodoListHeadCol className="w-10"></TodoListHeadCol>
    </div>
  );
}

const TodoListHeadCol = ({ children, className }) => {
  return (
    <div className={`border-b py-4 font-semibold ${className}`}>{children}</div>
  );
};

export default TodoListHead;

import React from "react";
import TodoItem from "./TodoListItem";
import TodoListHead from "./TodoListHead";

const TodoList = ({ tasks }) => {
  return (
    <div className=" w-full bg-white p-10 rounded-md">
      <TodoListHead />
      {tasks.map((i, j) => (
        <TodoItem {...i} key={j} />
      ))}
    </div>
  );
};

export default TodoList;

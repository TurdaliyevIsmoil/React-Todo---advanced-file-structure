import React from "react";
import { useTodoContext } from "../../../context/todo.context";
import formatDate from "../../../utils/formatDate";
import StatusCol from "./StatusCol";

const TodoListItem = ({ id, description, time, status }) => {
  const { changeStatus, deleteTask } = useTodoContext();
  const statusChangeHandler = () => {
    changeStatus(status, id);
  };

  const deleteHandler = () => {
    deleteTask(id);
  };
  return (
    <div className="flex items-center border-b ">
      <TodoListItemCol className="w-24">{id}</TodoListItemCol>
      <TodoListItemCol className="grow">{description}</TodoListItemCol>
      <TodoListItemCol className="w-40">{formatDate(time)}</TodoListItemCol>
      <TodoListItemCol onClick={statusChangeHandler} className={`w-40`}>
        <StatusCol status={status} />
      </TodoListItemCol>
      <TodoListItemCol
        onClick={deleteHandler}
        className={`w-10 flex justify-end items-center`}
      >
        <img
          src="https://img.icons8.com/material-sharp/24/000000/filled-trash.png"
          className="hover:opacity-60 duration-150 cursor-pointer"
        />
      </TodoListItemCol>
    </div>
  );
};

const TodoListItemCol = ({ children, className, ...rest }) => {
  return (
    <div className={`py-4 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default TodoListItem;

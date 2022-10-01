import { createContext, useContext, useEffect, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import reducer from "../reducer/todo.reducer";
import {
  ADD_TASK,
  DELETE_TASK,
  SET_INITIAL_LIST,
  STATUS_CHANGE_TASK,
  STATUS_DONE,
  STATUS_PENDING,
} from "../utils/constants";
import { STATUS_PROGRESS } from "./../utils/constants";

const initialValue = {
  list: [],
};

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [savedLists, setSavedLists] = useLocalStorage("list", []);

  const addTask = (description) => {
    const time = new Date();
    const id = state.list.length + 1;
    const newTask = {
      time,
      id,
      description,
      status: "pending",
    };
    dispatch({ type: ADD_TASK, payload: newTask });
  };

  const changeStatus = (status, id) => {
    let nextStatus = STATUS_DONE;
    switch (status) {
      case STATUS_PENDING:
        nextStatus = STATUS_PROGRESS;
        break;
      case STATUS_PROGRESS:
        nextStatus = STATUS_DONE;
        break;
    }
    dispatch({ type: STATUS_CHANGE_TASK, payload: { nextStatus, id } });
  };

  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  useEffect(() => {
    if (savedLists) dispatch({ type: SET_INITIAL_LIST, payload: savedLists });
  }, []);

  useEffect(() => {
    setSavedLists(state.list);
  }, [state]);

  return (
    <TodoContext.Provider
      value={{ ...state, addTask, changeStatus, deleteTask }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => useContext(TodoContext);

export { useTodoContext, TodoProvider };

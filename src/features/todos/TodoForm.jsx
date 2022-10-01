import React from "react";
import { useState } from "react";
import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";
import { useTodoContext } from "../../context/todo.context";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const { addTask } = useTodoContext();
  const valueHandler = (e) => setValue(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (value === "") return;
    addTask(value);
    setValue("");
  };
  return (
    <form
      onSubmit={submitHandler}
      className="w-full max-w-xl mx-auto flex item-center gap-4"
    >
      <Input
        value={value}
        placeholder="Add something..."
        onChange={valueHandler}
      />
      <Button>Add</Button>
    </form>
  );
};

export default TodoForm;

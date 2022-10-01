import React from "react";
import TodoForm from "../features/todos/TodoForm";
import TodoList from "../features/todos/List/TodoList";
import { useTodoContext } from "../context/todo.context";
import GlassBox from "../components/ui/GlassBox";

const Home = () => {
  const { list } = useTodoContext();

  return (
    <GlassBox className="max-w-6xl bg-[#fffa] mx-auto mt-20 p-10 rounded-xl flex flex-col items-center gap-10">
      <h2 className="text-3xl font-semibold text-center">To Do List</h2>
      <TodoForm />
      <TodoList tasks={list} />
    </GlassBox>
  );
};

export default Home;

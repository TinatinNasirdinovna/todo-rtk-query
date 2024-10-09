"use client";
import { FC, useState } from "react";
import scss from "./TodoAdd.module.scss";
import { usePostTodoMutation } from "@/redux/api/todo";

const TodoAdd: FC = () => {
  const [addTodoMutation] = usePostTodoMutation();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTodo = async () => {
    if(!title && !description) return
    const todo = {
      title,
      description,
    };
    await addTodoMutation(todo);
  };

  return (
    <section className="container ">
      <h1 className="text-center pt-12 text-6xl font-extrabold">Lets do it!</h1>
      <div className=" ">
        <div className="flex gap-4 p-4 w-[55%] mx-auto bg-slate-400 bg-opacity-40 rounded-lg">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="title"
            className="py-2 px-4 rounded-lg"
          />
          <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
            type="text"
            placeholder="description"
            className="py-2 px-4 rounded-lg"
          />
          <button className="border border-white p-4 rounded-lg" onClick={addTodo}>add todo</button>
        </div>
      </div>
    </section>
  );
};

export default TodoAdd;

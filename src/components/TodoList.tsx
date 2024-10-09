"use client";
import React, { FC } from "react";
import s from "./TodoList.module.scss";
import { useGetTodosQuery } from "@/redux/api/todo";

const TodoList: FC = () => {
  const { data } = useGetTodosQuery();
  console.log(data, "data");

  return (
    <div className="container">
      <div className="w-[55%] mt-5 p-4 mx-auto bg-slate-400 bg-opacity-40 rounded-lg">
        {data?.map((item, index) => (
          <ul className="" key={index}>
            <li className="flex items-center gap-10 justify-between">
              <h5><span className="text-blue-500">Title:</span> {item.title}</h5>
              <p> <span className="text-blue-500">Description</span>: {item.description}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

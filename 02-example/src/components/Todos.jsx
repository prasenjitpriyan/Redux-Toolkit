import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-3xl">
      <ul className="max-w-xs flex flex-col">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white"
          >
            <div className="flex justify-between w-full">{todo.text}</div>
            <MdOutlineDelete
              onClick={() => dispatch(removeTodo(todo.id))}
              className="inline-flex items-center text-xl font-medium cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

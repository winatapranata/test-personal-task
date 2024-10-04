"use client";

import { useEffect, useState } from "react";

import { NoDataCard } from "@/components/cards/no-data-card";
import { TodoCard } from "@/components/cards/todo-card";
import { Navbar } from "@/components/navbar";
import { Tab } from "@/components/tab";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("open"); // Default filter

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const handleTodoAdd = (newTodo) => {
    const todoWithId = { ...newTodo, id: Date.now() }; // Add a unique id to each todo
    const updatedTodos = [...todos, todoWithId];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleTodoRemove = (todoToRemove) => {
    const updatedTodos = todos.filter((todo) => todo !== todoToRemove);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleTodoUpdate = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  const filteredTodos = todos.filter((todo) => todo.status === filter);

  return (
    <div>
      <Navbar onTodoAdd={handleTodoAdd} />
      <div className="px-5">
        <Tab onFilterChange={handleFilterChange} />
        {filteredTodos.length < 1 ? (
          <NoDataCard />
        ) : (
          <div className="flex flex-col mt-6 space-y-4">
            {filteredTodos.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                onRemove={handleTodoRemove}
                onUpdate={handleTodoUpdate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

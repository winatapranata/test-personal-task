import { useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "../../button";

export const FormAdd = ({ onTodoAdd }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newTodo = {
      title: formData.get("title"),
      description: formData.get("description"),
      status: formData.get("status"),
    };

    // Save to localStorage
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    existingTodos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(existingTodos));

    // Notify parent component to update state
    onTodoAdd(newTodo);

    // Close the modal
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button text="Tambah Tugas" onClick={() => setIsOpen(true)} />
      </DialogTrigger>
      <DialogContent>
        <h1 className="text-2xl font-bold">Tugas Baru</h1>
        <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-3">
            <label htmlFor="title">Nama Tugas</label>
            <input
              id="title"
              className="p-2 border focus:outline-none"
              name="title"
              required
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="description">Deskripsi</label>
            <textarea
              id="description"
              className="p-2 border focus:outline-none"
              name="description"
              required
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              className="p-2 border focus:outline-none"
            >
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <button type="submit" className="p-2 text-white bg-blue-500 rounded">
            Simpan
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

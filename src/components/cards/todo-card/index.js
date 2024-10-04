import { useState } from "react";

import { FormUpdate } from "@/components/forms/form-update";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const TodoCard = ({ todo, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const confirmRemove = () => {
    onRemove(todo); // Call parent function to remove the todo
    setIsRemoving(false); // Close the remove modal
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-bold">{todo.title}</h2>
      <p>{todo.description}</p>
      <div className="flex items-center mt-4 space-x-1 divide-x-2">
        <Dialog open={isRemoving} onOpenChange={setIsRemoving}>
          <DialogTrigger>
            <button className="px-2 py-1 text-red-500">Hapus</button>
          </DialogTrigger>
          <DialogContent>
            <h1 className="text-2xl font-bold text-center">Hapus Tugas</h1>
            <p className="text-center">
              Apakaha anda yakin ingin menghapus tugas ini?
            </p>
            <div className="p-5 rounded-lg shadow">
              <h2 className="font-bold">{todo.title}</h2>
              <p>{todo.description}</p>
            </div>
            <div className="flex justify-between mt-4 space-x-4">
              <button
                onClick={() => setIsRemoving(false)}
                className="w-1/2 px-4 py-3 text-white bg-[#3182CE] border rounded"
              >
                Batal
              </button>
              <button
                onClick={confirmRemove}
                className="w-1/2 px-4 py-3 text-white bg-[#E53E3E] rounded"
              >
                Ya, Hapus
              </button>
            </div>
          </DialogContent>
        </Dialog>
        <FormUpdate
          todo={todo}
          isEditing={isEditing}
          onOpenChange={(e) => setIsEditing(e)}
          onUpdate={(e) => onUpdate(e)}
        />
      </div>
    </div>
  );
};

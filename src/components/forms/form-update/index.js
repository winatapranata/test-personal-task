import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const FormUpdate = ({ todo, isEditing, onOpenChange, onUpdate }) => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedTodo = {
      ...todo, // Keep existing properties
      title: formData.get("title"),
      description: formData.get("description"),
      status: formData.get("status"),
    };
    onUpdate(updatedTodo); // Call parent function to update todo
    onOpenChange(false); // Close the edit modal
  };

  return (
    <Dialog open={isEditing} onOpenChange={onOpenChange}>
      <DialogTrigger>
        <button className="px-2 py-1 text-blue-500">Edit</button>
      </DialogTrigger>
      <DialogContent>
        <h1 className="text-2xl font-bold">Edit Tugas</h1>
        <form className="flex flex-col space-y-3" onSubmit={handleUpdate}>
          <div className="flex flex-col space-y-3">
            <label htmlFor="title">Nama Tugas</label>
            <input
              id="title"
              className="p-2 border focus:outline-none"
              name="title"
              defaultValue={todo.title}
              required
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="description">Deskripsi</label>
            <textarea
              id="description"
              className="p-2 border focus:outline-none"
              name="description"
              defaultValue={todo.description}
              required
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              className="p-2 border focus:outline-none"
              defaultValue={todo.status}
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

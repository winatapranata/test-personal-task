import { Plus } from "lucide-react";

export const Button = ({ text, variant = "info" }) => {
  return (
    <div
      className={`${variant == "info" ? "bg-[#3182CE]" : ""} ${
        variant == "danger" ? "bg-[#E53E3E]" : ""
      } flex items-center space-x-2  p-3 rounded`}
    >
      <Plus className="text-white" />
      <span className="text-white">{text}</span>
    </div>
  );
};

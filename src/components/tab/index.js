import { useState } from "react";

import { CheckCircle, RefreshCcw, Sun } from "lucide-react";

export const Tab = ({ onFilterChange }) => {
  const [active, setActive] = useState("open");

  const handleFilterChange = (status) => {
    setActive(status);
    onFilterChange(status);
  };

  return (
    <div className="flex items-center justify-between w-full space-x-2">
      <button
        className={`${
          active === "open" ? "bg-[#38B2AC] text-white" : "bg-gray-300"
        } py-3 px-4 rounded-full flex space-x-2 items-center`}
        onClick={() => handleFilterChange("open")}
      >
        <Sun
          className={`${
            active === "open" ? "text-white" : "text-black"
          } w-4 h-4`}
        />
        <span>Open</span>
      </button>
      <button
        className={`${
          active === "in-progress" ? "bg-[#38B2AC] text-white" : "bg-gray-300"
        } py-3 px-4 rounded-full flex space-x-2 items-center`}
        onClick={() => handleFilterChange("in-progress")}
      >
        <RefreshCcw
          className={`${
            active === "in-progress" ? "text-white" : "text-black"
          } w-4 h-4`}
        />
        <span>In Progress</span>
      </button>
      <button
        className={`${
          active === "done" ? "bg-[#38B2AC] text-white" : "bg-gray-300"
        } py-3 px-4 rounded-full flex space-x-2 items-center`}
        onClick={() => handleFilterChange("done")}
      >
        <CheckCircle
          className={`${
            active === "done" ? "text-white" : "text-black"
          } w-4 h-4`}
        />
        <span>Done</span>
      </button>
    </div>
  );
};

import Image from "next/image";

import { FormAdd } from "../forms/form-add";

export const Navbar = ({ onTodoAdd }) => {
  return (
    <nav className="flex items-center justify-between p-5 space-x-2">
      <Image
        src="/static/images/logo-personal-task.png"
        alt="logo"
        width={150}
        height={100}
      />
      <FormAdd onTodoAdd={onTodoAdd} />
    </nav>
  );
};

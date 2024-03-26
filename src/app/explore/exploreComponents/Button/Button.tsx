import React, { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: ReactNode;
  variant: string;
  to?: string; // Add a new optional prop 'to' for the link path
};

const Button = ({ type, title, icon, variant, to }: ButtonProps) => {
  if (to) {
    return (
      <Link
        href={to}
        className={`flex items-center gap-2 border rounded-full px-5 py-3 transition duration-300 ${variant} hover:bg-green-800 hover:border-green-500`}
      >
        <label className="whitespace-nowrap font-bold text-base cursor-pointer font-sans">
          {title}
        </label>
        {icon && <span>{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      className={`flex items-center gap-2 border rounded-full px-5 py-4 transition duration-300 ${variant} hover:bg-green-800 hover:border-green-500`}
      type={type}
    >
      <label className="whitespace-nowrap font-bold text-base cursor-pointer font-sans">
        {title}
      </label>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;

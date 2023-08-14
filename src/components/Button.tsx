import { type ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => (
  <button
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    className="mb-2 flex rounded border border-slate-950 bg-transparent px-6 py-2.5 text-xs font-medium uppercase leading-normal hover:border-transparent hover:bg-slate-950 hover:text-white"
  >
    {children}
  </button>
);

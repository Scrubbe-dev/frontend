import React, { ReactNode } from "react";
import { Button } from "../ui/button";

type Props = {
  children: ReactNode;
  className?: string;
};
const Cbutton = ({ children, className }: Props) => {
  return (
    <Button
      className={`bg-gradient-to-t to-colorScBlue from-blue-800 ${className}`}
    >
      {children}
    </Button>
  );
};

export default Cbutton;

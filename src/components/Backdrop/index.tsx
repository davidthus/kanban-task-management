import React from "react";
import { BackdropContainer } from "./Backdrop.style";

interface BackdropProps {
  children: React.ReactNode;
  handleClick: () => void;
}

const Backdrop = ({ children, handleClick }: BackdropProps) => {
  return (
    <BackdropContainer
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropContainer>
  );
};

export default Backdrop;

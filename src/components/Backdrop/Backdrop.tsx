import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { closeModal } from "../../features/modalSlice";
import { BackdropContainer } from "./Backdrop.style";

interface BackdropProps {
  children: React.ReactNode;
  sidebar?: boolean;
}

const Backdrop = ({ children, sidebar }: BackdropProps) => {
  const dispatch = useAppDispatch();

  return (
    <BackdropContainer
      onClick={() => dispatch(closeModal())}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sidebar={sidebar ? true : undefined}
    >
      {children}
    </BackdropContainer>
  );
};

export default Backdrop;

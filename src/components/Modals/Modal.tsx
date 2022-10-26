import React from "react";
import { useAppSelector } from "../../app/hooks";
import Backdrop from "../Backdrop/Backdrop";
import AddBoard from "./AddBoard/AddBoard";
import AddTask from "./AddTask/AddTask";
import DeleteBoard from "./DeleteBoard/DeleteBoard";
import DeleteTask from "./DeleteTask/DeleteTask";
import EditBoard from "./EditBoard/EditBoard";
import EditTask from "./EditTask/EditTask";
import { ModalWrapper, SidebarModalWrapper } from "./Modal.style";
import SidebarModal from "./SidebarModal/SidebarModal";
import ViewTask from "./ViewTask/ViewTask";

function Modal() {
  const { modalType } = useAppSelector((state) => state.modal);

  return (
    <Backdrop sidebar={modalType === "sidebar-modal" ? true : false}>
      {modalType === "sidebar-modal" ? (
        <SidebarModalWrapper
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          <SidebarModal />
        </SidebarModalWrapper>
      ) : (
        <ModalWrapper
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {modalType === "view-task" && <ViewTask />}
          {modalType === "add-board" && <AddBoard />}
          {modalType === "add-task" && <AddTask />}
          {modalType === "edit-task" && <EditTask />}
          {modalType === "edit-board" && <EditBoard />}
          {modalType === "delete-board" && <DeleteBoard />}
          {modalType === "delete-task" && <DeleteTask />}
        </ModalWrapper>
      )}
    </Backdrop>
  );
}

export default Modal;

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  AddTaskIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  DarkLogoIcon,
  LightLogoIcon,
  MobileLogoIcon,
  VerticalDotsIcon,
} from "../../assets";
import { toggleSidebar } from "../../features/dataSlice";
import { closeModal, openModal } from "../../features/modalSlice";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { AddTask } from "../../shared/buttons";
import { appBoard } from "../../types/boardTypes";
import {
  ArrowIconWrapper,
  BoardName,
  ButtonsWrapper,
  DeleteButton,
  EditButton,
  LogoWrapper,
  NavbarContainer,
  NavbarWrapper,
  Popout,
  VerticalDotsWrapper,
} from "./Navbar.style";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { data, modal, boards } = useAppSelector((state) => state);
  const [popoutOpen, setPopoutOpen] = useState(false);

  const { isMobileSize } = useMatchMedia();

  useEffect(() => {
    if (
      !isMobileSize &&
      modal.modalIsOpen &&
      modal.modalType === "sidebar-modal"
    ) {
      dispatch(closeModal());
    }

    if (isMobileSize && data.sideBarsOpen === "true") {
      dispatch(toggleSidebar());
    }
  }, [
    isMobileSize,
    modal.modalIsOpen,
    modal.modalType,
    data.sideBarsOpen,
    dispatch,
  ]);

  const currentActiveBoard = boards.filter(
    (board: appBoard) => board.name === data.activeBoard
  )[0];

  return (
    <NavbarContainer>
      <LogoWrapper sidebarOpen={data.sideBarsOpen === "true" ? true : false}>
        {isMobileSize ? (
          <MobileLogoIcon />
        ) : data.theme === "dark" ? (
          <LightLogoIcon />
        ) : (
          <DarkLogoIcon />
        )}
      </LogoWrapper>
      <NavbarWrapper>
        <BoardName>
          {data.activeBoard}
          {isMobileSize && (
            <ArrowIconWrapper
              onClick={() => {
                if (modal.modalIsOpen && modal.modalType === "sidebar-modal") {
                  dispatch(closeModal());
                } else {
                  dispatch(
                    openModal({
                      modalType: "sidebar-modal",
                      modalDetail: { title: "", status: "" },
                    })
                  );
                }
              }}
            >
              {modal.modalIsOpen && modal.modalType === "sidebar-modal" ? (
                <ArrowUpIcon />
              ) : (
                <ArrowDownIcon />
              )}
            </ArrowIconWrapper>
          )}
        </BoardName>
        <ButtonsWrapper>
          <AddTask
            disabled={currentActiveBoard.columns.length === 0 ? true : false}
            onClick={() =>
              dispatch(
                openModal({
                  modalType: "add-task",
                  modalDetail: { title: "", status: "", board: "" },
                })
              )
            }
          >
            {isMobileSize ? <AddTaskIcon /> : "+ Add New Task"}
          </AddTask>
          <VerticalDotsWrapper onClick={() => setPopoutOpen((prev) => !prev)}>
            <VerticalDotsIcon />
            {popoutOpen && (
              <Popout>
                <EditButton
                  onClick={() =>
                    dispatch(
                      openModal({
                        modalType: "edit-board",
                        modalDetail: {
                          title: "",
                          status: "",
                          board: data.activeBoard,
                        },
                      })
                    )
                  }
                >
                  Edit Board
                </EditButton>
                <DeleteButton
                  onClick={() =>
                    dispatch(
                      openModal({
                        modalType: "delete-board",
                        modalDetail: {
                          title: "",
                          status: "",
                          board: data.activeBoard,
                        },
                      })
                    )
                  }
                >
                  Delete Board
                </DeleteButton>
              </Popout>
            )}
          </VerticalDotsWrapper>
        </ButtonsWrapper>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;

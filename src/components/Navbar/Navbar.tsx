import React, { useEffect } from "react";
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
import {
  ArrowIconWrapper,
  BoardName,
  ButtonsWrapper,
  LogoWrapper,
  NavbarContainer,
  NavbarWrapper,
  VerticalDotsWrapper,
} from "./Navbar.style";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state);
  const { modal } = useAppSelector((state) => state);
  const { isMobileSize } = useMatchMedia();

  useEffect(() => {
    if (
      !isMobileSize &&
      modal.modalIsOpen &&
      modal.modalType === "sidebar-modal"
    ) {
      dispatch(closeModal());
      dispatch(toggleSidebar());
    }
  }, [isMobileSize, modal.modalIsOpen, modal.modalType, dispatch]);

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
                dispatch(toggleSidebar());
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
          <AddTask disabled>
            {isMobileSize ? <AddTaskIcon /> : "+ Add New Task"}
          </AddTask>
          <VerticalDotsWrapper>
            <VerticalDotsIcon />
          </VerticalDotsWrapper>
        </ButtonsWrapper>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;

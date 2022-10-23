import React from "react";
import { useAppSelector } from "../../app/hooks";
import {
  AddTaskIcon,
  DarkLogoIcon,
  LightLogoIcon,
  MobileLogoIcon,
  VerticalDotsIcon,
} from "../../assets";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { AddTask } from "../../shared/buttons";
import {
  BoardName,
  ButtonsWrapper,
  LogoWrapper,
  NavbarContainer,
  NavbarWrapper,
  VerticalDotsWrapper,
} from "./Navbar.style";

interface NavbarProps {
  sidebarOpen: boolean;
}

const Navbar = ({ sidebarOpen }: NavbarProps) => {
  const { data } = useAppSelector((state) => state);
  const { isMobileSize } = useMatchMedia();

  return (
    <NavbarContainer>
      <LogoWrapper sidebarOpen={sidebarOpen ? true : false}>
        {isMobileSize ? (
          <MobileLogoIcon />
        ) : data.theme === "dark" ? (
          <LightLogoIcon />
        ) : (
          <DarkLogoIcon />
        )}
      </LogoWrapper>
      <NavbarWrapper>
        <BoardName>{data.activeBoard}</BoardName>
        <ButtonsWrapper>
          <AddTask disabled>
            {isMobileSize ? <AddTaskIcon /> : "+ Add New Task"}
          </AddTask>
          <VerticalDotsWrapper onClick={() => console.log("im clicked")}>
            <VerticalDotsIcon />
          </VerticalDotsWrapper>
        </ButtonsWrapper>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;

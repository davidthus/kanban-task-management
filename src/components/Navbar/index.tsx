import React from "react";
import { useAppSelector } from "../../app/hooks";
import { DarkLogoIcon, LightLogoIcon, MobileLogoIcon } from "../../assets";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { LogoWrapper, NavbarContainer, NavbarWrapper } from "./Navbar.style";

const Navbar = () => {
  const theme = useAppSelector((state) => state.data.theme);
  const { isMobileSize } = useMatchMedia();

  return (
    <NavbarContainer>
      <LogoWrapper>
        {isMobileSize ? (
          <MobileLogoIcon />
        ) : theme === "dark" ? (
          <LightLogoIcon />
        ) : (
          <DarkLogoIcon />
        )}
      </LogoWrapper>
      <NavbarWrapper></NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;

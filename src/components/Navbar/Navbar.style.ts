import styled from "styled-components";
import { HeadingXL } from "../../shared/typography";
import { themeType } from "../../types/themeTypes";

export const NavbarContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  height: 97px;
  background-color: ${({ theme }: themeType) => theme.navBarBg};
  grid-template: 1fr / clamp(280px, 25vw, 300px) 1fr;
`;

export const LogoWrapper = styled.aside`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 2rem;
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  border-left: 1px solid ${({ theme }: themeType) => theme.border};
  border-bottom: 1px solid ${({ theme }: themeType) => theme.border};
  padding-left: 2rem;
  padding-right: 4rem;
`;

export const BoardName = styled.h1`
  ${HeadingXL}
  color: ${({ theme }: themeType) => theme.textPrimary};
`;

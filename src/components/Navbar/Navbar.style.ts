import styled from "styled-components";
import { HeadingL, HeadingXL } from "../../shared/typography";
import { themeType } from "../../types/themeTypes";

export const NavbarContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  height: clamp(80px, 10vw, 97px);
  background-color: ${({ theme }: themeType) => theme.navBarBg};
  grid-template: 1fr / clamp(261px, 25vw, 300px) 1fr;

  @media (max-width: 650px) {
    grid-template: 1fr / calc(2.5rem + 25px) 1fr;
  }
  @media (max-width: 375px) {
    grid-template: 1fr / calc(1rem + 25px) 1fr;
  }
`;

export const LogoWrapper = styled.aside`
  width: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid ${({ theme }: themeType) => theme.border};
  padding-left: 2rem;
  border-bottom: ${(props: any) =>
    props.sidebarOpen ? "none" : `1px solid ${props.theme.border}`};

  @media (max-width: 650px) {
    border-right: none;
    padding-left: 1.25rem;
  }
  @media (max-width: 375px) {
    padding-left: 0.5rem;
  }
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${({ theme }: themeType) => theme.border};
  padding-left: 2rem;
  padding-right: clamp(1rem, 3vw, 4rem);

  @media (max-width: 650px) {
    padding-left: 0;
  }
`;

export const BoardName = styled.h1`
  ${HeadingXL}
  color: ${({ theme }: themeType) => theme.textPrimary};

  @media screen and (max-width: 800px) {
    font-size: 20px;
    line-height: normal;
    font-weight: bold;
  }

  @media (max-width: 700px) {
    ${HeadingL}
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-content: center;
  justify-content: center;
`;

export const VerticalDotsWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

import styled from "styled-components";
import { themeType } from "./types/themeTypes";

export const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }: themeType) => theme.bodyBg};
  padding-top: calc(clamp(80px, 10vw, 97px) + 2rem);
  padding-left: ${(props: any) =>
    props.sidebarOpen ? "calc(clamp(270px, 25vw, 300px) + 2rem)" : "2rem"};
`;

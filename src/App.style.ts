import styled from "styled-components";
import { themeType } from "./types/themeTypes";

export const AppWrapper = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }: themeType) => theme.bodyBg};
  padding-top: calc(97px + 2rem);
`;

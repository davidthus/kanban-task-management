import styled from "styled-components";
import { themeType } from "../../types/themeTypes";

export const SidebarContainer = styled.aside`
  height: calc(100vh - 97px);
  width: clamp(261px, 25vw, 300px);
  position: absolute;
  bottom: 0;
  left: 0;
  display: ${(props: any) => (props.open ? "flex" : "none")};
  padding-top: 4vh;
  padding-bottom: 4vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-right: 1px solid ${({ theme }: themeType) => theme.border};
  background: ${({ theme }: themeType) => theme.asideBg};
`;

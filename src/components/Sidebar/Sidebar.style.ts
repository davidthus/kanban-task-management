import styled, { css } from "styled-components";
import { HeadingM, HeadingS } from "../../shared/typography";
import { themeType } from "../../types/themeTypes";

const itemSpacing = css`
  width: 100%;
  text-align: left;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SidebarContainer = styled.aside`
  height: calc(100vh - clamp(80px, 10vw, 97px));
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

export const BoardTabsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Heading = styled.h3`
  color: ${({ theme }: themeType) => theme.grey};
  ${itemSpacing}
  ${HeadingS}
`;

export const BoardTabsWrapper = styled.menu`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

export const BoardTab = styled.li`
  ${itemSpacing}
  ${HeadingM}
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  transition: 0.3s;
  border-bottom-right-radius: 99rem;
  border-top-right-radius: 99rem;
  cursor: pointer;
  background-color: ${(props: any) =>
    props.active ? props.theme.buttonPrimaryBg : props.theme.asideBg};
  color: ${(props: any) =>
    props.active ? props.theme.buttonPrimaryText : props.theme.grey};

  & svg path {
    fill: ${(props: any) =>
      props.active ? props.theme.buttonPrimaryText : props.theme.grey};
  }

  &:hover {
    background-color: ${(props: any) =>
      props.active
        ? props.theme.buttonPrimaryBg
        : props.theme.inactiveBoardTabHover};
    color: ${(props: any) =>
      props.active ? props.theme.white : props.theme.buttonPrimaryBg};

    & svg path {
      fill: ${(props: any) =>
        props.active ? props.theme.white : props.theme.buttonPrimaryBg};
    }
  }
`;

export const NewBoardButton = styled.button`
  ${itemSpacing}
  ${HeadingM}
  padding: 1rem 2rem;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  color: ${({ theme }: themeType) => theme.buttonPrimaryBg};
`;

import styled from "styled-components";
import { themeType } from "../../types/themeTypes";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background: ${({ theme }: themeType) => theme.bodyBg};
  display: flex;
  width: 83%;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`;

export const ToggleWrapper = styled.button`
  width: 40px;
  height: 20px;
  background-color: ${({ theme }: themeType) => theme.buttonPrimaryBg};
  border-radius: 99rem;
  position: relative;
  transition: 0.5s;

  border: 0;
  display: flex;
  align-items: center;
  padding-right: 3px;
  padding-left: ${(props: any) => (props.lightModeOn ? "3px" : "23px")};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }: themeType) => theme.buttonPrimaryHover};
  }
`;

export const Toggle = styled.div`
  background-color: ${({ theme }: themeType) => theme.buttonPrimaryText};
  border-radius: 99rem;
  width: 14px;
  height: 14px;
`;

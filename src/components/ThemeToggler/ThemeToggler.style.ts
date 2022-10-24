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

export const ToggleWrapper = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${({ theme }: themeType) => theme.buttonPrimaryBg};
  border-radius: 99rem;
  position: relative;
  display: flex;
  align-items: center;
  padding-inline: 3px;
  cursor: pointer;
  justify-content: ${(props: any) =>
    props.lightModeOn ? "flex-start" : "flex-end"};
`;

export const Toggle = styled.div`
  background-color: ${({ theme }: themeType) => theme.buttonPrimaryText};
  border-radius: 99rem;
  width: 14px;
  height: 14px;
`;

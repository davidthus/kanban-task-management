import styled from "styled-components";
import { BodyM } from "../../../shared/typography";
import { themeObject, themeType } from "../../../types/themeTypes";

export const Container = styled.li`
  border-radius: 4px;
  background-color: ${({ theme }: themeType) => theme.bodyBg};
  width: 100%;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  &:hover {
    background-color: ${({ theme }: themeType) => theme.subTaskCheckBoxHover};
  }
`;

interface SubtaskProps {
  theme: themeObject;
  completed: boolean;
}

export const SubtaskTitle = styled.h6`
  ${BodyM}
  color: ${({ theme }: themeType) => theme.textPrimary};
  opacity: ${(props: SubtaskProps) => (props.completed ? "0.5" : "1")};
  text-decoration: ${(props: SubtaskProps) =>
    props.completed ? "line-through" : "intial"};
`;

export const CheckBox = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 2px;

  border: 1px solid ${({ theme }: themeType) => theme.border};
  background-color: ${(props: SubtaskProps) =>
    props.completed ? props.theme.completedCheckBoxBg : props.theme.checkBoxBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

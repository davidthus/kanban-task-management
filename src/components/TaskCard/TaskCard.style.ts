import styled from "styled-components";
import { BodyM, HeadingM } from "../../shared/typography";
import { themeType } from "../../types/themeTypes";

export const TaskCardContainer = styled.article`
  border-radius: 8px;
  width: 100%;
  min-width: 280px;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }: themeType) => theme.taskBg};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({ theme }: themeType) => theme.TaskBoxShadow};
`;

export const TaskHeading = styled.h5`
  ${HeadingM}
  color: ${({ theme }: themeType) => theme.textPrimary};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }: themeType) => theme.buttonPrimaryBg};
  }
`;

export const SubtasksCompleted = styled.p`
  ${BodyM}
  color:  ${({ theme }: themeType) => theme.grey};
`;

import styled from "styled-components";
import { BodyL, BodyM, HeadingL } from "../../../shared/typography";
import { themeType } from "../../../types/themeTypes";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TaskTitle = styled.h5`
  ${HeadingL}
  color: ${({ theme }: themeType) => theme.textPrimary};
`;

export const TopWrapper = styled.div`
  width: 100%;
  gap: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VerticalDotsWrapper = styled.div`
  cursor: pointer;
  align-items: center;
  position: relative;
`;

export const Description = styled.p`
  ${BodyL}
  color: ${({ theme }: themeType) => theme.grey};
`;

export const Popout = styled.ul`
  position: absolute;
  border-radius: 8px;
  padding: 1.5rem 1.5rem;
  background: ${({ theme }: themeType) => theme.dropDownBg};
  width: 192px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  top: 3rem;
  left: -96px;
  list-style: none;
`;

export const EditButton = styled.li`
  color: ${({ theme }: themeType) => theme.grey};
  ${BodyL}
  cursor: pointer;
`;

export const DeleteButton = styled.li`
  color: ${({ theme }: themeType) => theme.red};
  ${BodyL}
  cursor: pointer;
`;

export const SubtasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const Subheading = styled.h6`
  ${BodyM}
  color: ${({ theme }: themeType) => theme.textPrimary};
`;

export const SubtasksWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

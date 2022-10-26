import styled from "styled-components";
import { HeadingS } from "../../shared/typography";
import { themeType } from "../../types/themeTypes";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  gap: 1.5rem;
  width: 100%;
`;

export const ColumnName = styled.h4`
  ${HeadingS}
  color: ${({ theme }: themeType) => theme.grey};
  display: flex;
  gap: 0.5rem;
  text-transform: uppercase;
`;

export const PurpleCircle = styled.div`
  background-color: #8471f2;
  border-radius: 99rem;
  width: 15px;
  height: 15px;
`;
export const GreenCircle = styled.div`
  background-color: #67e2ae;
  border-radius: 99rem;
  width: 15px;
  height: 15px;
`;
export const BlueCircle = styled.div`
  background-color: #49c4e5;
  border-radius: 99rem;
  width: 15px;
  height: 15px;
`;

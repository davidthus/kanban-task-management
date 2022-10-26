import styled from "styled-components";
import { HeadingXL } from "../../shared/typography";
import { themeType } from "../../types/themeTypes";

export const Container = styled.main`
  width: 100%;
  display: flex;
  gap: 2rem;
`;

export const NewColumnButton = styled.button`
  ${HeadingXL}
  outline: none;
  border: none;
  cursor: pointer;
  width: 280px;
  border-radius: 6px;
  color: ${({ theme }: themeType) => theme.grey};
  margin-top: calc(15px + 1.5rem);
  background: ${({ theme }: themeType) => theme.NewColumn};
  display: flex;
  align-items: center;
  justify-content: center;
`;

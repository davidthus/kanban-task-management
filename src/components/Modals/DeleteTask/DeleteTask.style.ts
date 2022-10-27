import styled from "styled-components";
import { BodyL, HeadingL } from "../../../shared/typography";
import { themeType } from "../../../types/themeTypes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

export const Heading = styled.h2`
  ${HeadingL}
  color: ${({ theme }: themeType) => theme.red};
`;

export const Message = styled.p`
  ${BodyL}
  color: ${({ theme }: themeType) => theme.grey};
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

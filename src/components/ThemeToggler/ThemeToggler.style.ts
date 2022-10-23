import styled from "styled-components";
import { themeType } from "../../types/themeTypes";

export const Container = styled.div`
  background: ${({ theme }: themeType) => theme.bodyBg};
  display: flex;
  width: clamp(7rem, 100%, 13rem);
  border-radius: 10px;
`;

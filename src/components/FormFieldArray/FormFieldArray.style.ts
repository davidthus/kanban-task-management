import styled from "styled-components";
import { themeObject } from "../../types/themeTypes";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const CrossWrapper = styled.div`
  cursor: ${(props: any) => (props.disabled ? "auto" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CrossIcon = styled.svg`
  &:hover {
    & g {
      fill: ${({
        theme,
        disabled,
      }: {
        theme: themeObject;
        disabled: boolean;
      }) => (disabled ? theme.grey : theme.red)};
    }
  }
`;

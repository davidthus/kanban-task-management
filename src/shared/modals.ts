import styled from "styled-components";
import { themeObject, themeType } from "../types/themeTypes";
import { BodyL, BodyM, HeadingL } from "./typography";

export const Title = styled.h5`
  ${HeadingL}
  color: ${({ theme }: themeType) => theme.textPrimary};
`;

export const Subheading = styled.h6`
  ${BodyM}
  color: ${({ theme }: themeType) => theme.textPrimary};
`;

interface InputProps {
  error?: boolean;
  theme: themeObject;
}

export const Input = styled.input`
  width: 100%;
  flex: 1;
  border: 1px solid
    ${({ error, theme }: InputProps) =>
      error ? theme.red : theme.dropDownBorder};

  &::placeholder {
    ${BodyL}
    color: ${({ theme }: themeType) => theme.grey}
  }

  &:focus {
    border: 1px solid 1px solid
      ${({ error, theme }: InputProps) =>
        error ? theme.red : theme.buttonPrimaryBg};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 112px;
  resize: none;

  &::placeholder {
    ${BodyL}
    color: ${({ theme }: themeType) => theme.grey}
  }

  &:focus {
    border: 1px solid ${({ theme }: themeType) => theme.buttonPrimaryBg};
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
`;

export const ErrorText = styled.p`
  ${BodyL}
  position: absolute;
  right: 1rem;
  color: ${({ theme }: themeType) => theme.red};
`;

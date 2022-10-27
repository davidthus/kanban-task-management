import styled from "styled-components";
import { themeType } from "../types/themeTypes";
import { ButtonSText, HeadingM } from "./typography";

const Button = styled.button`
  border-radius: 99rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 3rem;
`;

export const PrimaryButtonL = styled(Button)`
  color: ${({ theme }: any) => theme.buttonPrimaryText};
  background: ${({ theme }: any) => theme.buttonPrimaryBg};
  padding: 0.9rem 3rem;
  ${HeadingM}

  &:hover {
    background: ${({ theme }: themeType) => theme.buttonPrimaryHover};
  }

  &:focus {
    background: ${({ theme }: themeType) => theme.buttonPrimaryHover};
  }
`;

export const PrimaryButtonS = styled(Button)`
  color: ${({ theme }: themeType) => theme.buttonPrimaryText};
  background: ${({ theme }: themeType) => theme.buttonPrimaryBg};
  ${ButtonSText}

  &:hover {
    background: ${({ theme }: themeType) => theme.buttonPrimaryHover};
  }

  &:focus {
    background: ${({ theme }: themeType) => theme.buttonPrimaryHover};
  }
`;

export const ButtonSecondary = styled(Button)`
  color: ${({ theme }: themeType) => theme.buttonSecondaryText};
  background: ${({ theme }: themeType) => theme.buttonSecondaryBg};
  ${ButtonSText}

  &:hover {
    background: ${({ theme }: themeType) => theme.buttonSecondaryHover};
  }

  &:focus {
    background: ${({ theme }: themeType) => theme.buttonSecondaryHover};
  }
`;

export const ButtonDestructive = styled(Button)`
  color: ${({ theme }: themeType) => theme.deleteButtonText};
  background: ${({ theme }: themeType) => theme.deleteButtonBg};
  ${ButtonSText}

  &:hover {
    background: ${({ theme }: themeType) => theme.deleteButtonHover};
  }

  &:focus {
    background: ${({ theme }: themeType) => theme.deleteButtonHover};
  }
`;

export const AddTask = styled(Button)`
  color: ${({ theme }: themeType) => theme.buttonPrimaryText};
  background: ${({ theme }: themeType) => theme.buttonPrimaryBg};
  ${HeadingM}
  opacity: ${(props: any) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props: any) => (props.disabled ? "auto" : "pointer")};
  padding: 1rem clamp(1.5rem, 3vw, 2.5rem);

  &:hover {
    background: ${(props: any) =>
      props.disabled
        ? props.theme.buttonPrimaryBg
        : props.theme.buttonPrimaryHover};
  }
`;

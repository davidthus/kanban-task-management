import styled from "styled-components";
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
    background: ${({ theme }: any) => theme.buttonPrimaryHover};
  }

  &:focus {
    background: ${({ theme }: any) => theme.buttonPrimaryHover};
  }
`;

export const PrimaryButtonS = styled(Button)`
  color: ${({ theme }: any) => theme.buttonPrimaryText};
  background: ${({ theme }: any) => theme.buttonPrimaryBg};
  ${ButtonSText}

  &:hover {
    background: ${({ theme }: any) => theme.buttonPrimaryHover};
  }

  &:focus {
    background: ${({ theme }: any) => theme.buttonPrimaryHover};
  }
`;

export const ButtonSecondary = styled(Button)`
  color: ${({ theme }: any) => theme.buttonSecondaryText};
  background: ${({ theme }: any) => theme.buttonSecondaryBg};
  ${ButtonSText}

  &:hover {
    background: ${({ theme }: any) => theme.buttonSecondaryHover};
  }

  &:focus {
    background: ${({ theme }: any) => theme.buttonSecondaryHover};
  }
`;

export const ButtonDestructive = styled(Button)`
  color: ${({ theme }: any) => theme.deleteButtonText};
  background: ${({ theme }: any) => theme.deleteButtonBg};
  ${ButtonSText}

  &:hover {
    background: ${({ theme }: any) => theme.deleteButtonHover};
  }

  &:focus {
    background: ${({ theme }: any) => theme.deleteButtonHover};
  }
`;

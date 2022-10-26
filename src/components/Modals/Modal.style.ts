import { motion } from "framer-motion";
import styled from "styled-components";
import { themeType } from "../../types/themeTypes";

export const ModalWrapper = styled(motion.section)`
  padding: 2rem;
  border-radius: 6px;
  display: flex;
  min-width: 300px;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }: themeType) => theme.asideBg};
`;

export const SidebarModalWrapper = styled(motion.section)`
  padding: 1.5rem 0;
  border-radius: 6px;
  display: flex;
  min-width: 300px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }: themeType) => theme.asideBg};
`;

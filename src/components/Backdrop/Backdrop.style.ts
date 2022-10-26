import { motion } from "framer-motion";
import styled from "styled-components";
import { themeObject } from "../../types/themeTypes";

interface BackdropContainerProps {
  sidebar: boolean;
  theme: themeObject;
}

export const BackdropContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: ${(props: BackdropContainerProps) =>
    props.sidebar ? "calc(100vh - clamp(80px, 10vw, 97px))" : "100vh"};
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding-top: ${(props: BackdropContainerProps) =>
    props.sidebar ? "2rem" : 0};
  justify-content: ${(props: BackdropContainerProps) =>
    props.sidebar ? "flex-start" : "center"};
  align-items: center;
`;

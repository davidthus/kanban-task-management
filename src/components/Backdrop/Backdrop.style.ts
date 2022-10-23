import { motion } from "framer-motion";
import styled from "styled-components";
import { themeType } from "../../types/themeTypes";

export const BackdropContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

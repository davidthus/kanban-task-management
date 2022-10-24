import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { MoonIcon, SunIcon } from "../../assets";
import { toggleTheme } from "../../features/dataSlice";
import {
  Container,
  Toggle,
  ToggleWrapper,
  Wrapper,
} from "./ThemeToggler.style";

function ThemeToggler() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.data);

  return (
    <Container>
      <Wrapper>
        <SunIcon />
        <ToggleWrapper
          onClick={() => dispatch(toggleTheme())}
          lightModeOn={theme === "light" ? true : false}
        >
          <Toggle />
        </ToggleWrapper>
        <MoonIcon />
      </Wrapper>
    </Container>
  );
}

export default ThemeToggler;

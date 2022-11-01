import { createGlobalStyle } from "styled-components";
import { BodyL } from "../shared/typography";
import { themeType } from "../types/themeTypes";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
  }

  body {
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }: themeType) => theme.bodyBg};
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    position: absolute;
    inset: 0;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

input, textarea {
  ${BodyL}
  border: 1px solid #828FA325;
  background-color:  ${({ theme }: themeType) => theme.taskBg};
  padding: 0.5rem 1rem;
  color: ${({ theme }: themeType) => theme.textPrimary};
  border-radius: 4px;
  outline: none;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
    background: rgb(43, 44, 55);
}

::-webkit-scrollbar {
  width: 10px;
    height: 10%;
    background: rgb(32, 33, 44);
}
`;

export const light = {
  bodyBg: "#E4EBFA",
  navBarBg: "white",
  asideBg: "white",
  taskBg: "white",
  scrollBg: "white",
  NewColumn:
    "linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%)",
  TaskBoxShadow: "box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545)",

  // sub task checkbox
  subTaskCheckBoxBg: "#F4F7FD",
  subTaskCheckBoxHover: "#635FC725",

  checkBoxBg: "white",
  completedCheckBoxBg: "#635FC7",
  // input field

  textFieldError: "#EA5555",

  // drop down
  dropDownBorder: "#828FA325",
  dropDownActive: "#635FC7",
  dropDownBg: "white",
  dropDownIdle: "#828FA3",

  // buttons
  buttonPrimaryBg: "#635FC7",
  buttonPrimaryHover: "#A8A4FF",
  buttonPrimaryText: "white",
  buttonSecondaryBg: "rgba(99, 95, 199, 0.1)",
  buttonSecondaryText: "#635FC7",
  buttonSecondaryHover: "rgba(99, 95, 199, 0.25)",
  deleteButtonBg: "#EA5555",
  deleteButtonText: "white",
  deleteButtonHover: "#FF9898",
  inactiveBoardTabHover: "#97979730",

  // text

  textPrimary: "black",

  //shared
  border: "rgba(0, 0, 0, 0.15)",
  grey: "#828FA3",
  blue: "#635FC7",
  lightBlue: "#A8A4FF",
  red: "#EA5555",
  normalTheme: "white",
  editDropDown: "white",
};

export const dark = {
  bodyBg: "#20212C",
  asideBg: "#2B2C37",
  navBarBg: "#2B2C37",
  taskBg: "#2B2C37",
  scrollBg: "#2B2C37",
  NewColumn:
    "linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.125) 100%)",
  TaskBoxShadow: "filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",

  // sub task checkbox
  subTaskCheckBoxBg: "#20212C",
  subTaskCheckBoxHover: "#635FC725",

  checkBoxBg: "#2B2C37",
  completedCheckBoxBg: "#635FC7",
  // input field

  textFieldError: "#EA5555",
  // drop down
  dropDownIdle: "#828FA3",
  dropDownBorder: "#828FA325",
  dropDownActive: "#635FC7",
  dropDownBg: "#20212C",

  // buttons
  buttonPrimaryBg: "#635FC7",
  buttonPrimaryHover: "#A8A4FF",
  buttonPrimaryText: "white",
  buttonSecondaryBg: "white",
  buttonSecondaryText: "#635FC7",
  buttonSecondaryHover: "rgba(255, 255, 255, 0.6)",
  deleteButtonBg: "#EA5555",
  deleteButtonText: "white",
  deleteButtonHover: "#FF9898",
  inactiveBoardTabHover: "white",
  // text

  textPrimary: "white",

  // shared

  border: "#3E3F4E",
  grey: "#828FA3",
  blue: "#635FC7",
  lightBlue: "#A8A4FF",
  red: "#EA5555",
  normalTheme: "black",
  editDropDown: "#20212C",
};

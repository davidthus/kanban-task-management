import { createGlobalStyle } from "styled-components";
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
    "linear-gradient(to bottom,rgba(121,132,147,.2),rgba(130,143,163,.1),rgba(130,143,163,0))",
  // sub task checkbox
  subTaskCheckBoxBg: "#F4F7FD",
  subTaskCheckBoxHover: "#979797",

  checkBoxBg: "white",
  completedCheckBoxBg: "#635FC7",
  // input field

  textFieldError: "#EA5555",

  // drop down
  dropDownBorder: "#828FA3",
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

  // text

  textPrimary: "black",

  //shared
  border: "rgba(0, 0, 0, 0.15)",
  grey: "#828fa3",
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
    "linear-gradient(to bottom,rgba(121,132,147,.2),rgba(130,143,163,.1),rgba(130,143,163,0))",

  // sub task checkbox
  subTaskCheckBoxBg: "#20212C",
  subTaskCheckBoxHover: "#635FC7",

  checkBoxBg: "#2B2C37",
  completedCheckBoxBg: "#635FC7",
  // input field

  textFieldError: "#EA5555",
  // drop down
  dropDownIdle: "#828FA3",
  dropDownBorder: "#828FA3",
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
  // text

  textPrimary: "white",

  // shared

  border: "#3E3F4E",
  grey: "#828fa3",
  blue: "#635FC7",
  lightBlue: "#A8A4FF",
  red: "#EA5555",
  normalTheme: "black",
  editDropDown: "#20212C",
};

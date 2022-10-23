import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { AppWrapper } from "./App.style";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { toggleTheme } from "./features/dataSlice";
import { saveToLocalStorage } from "./utils/localStorage";

import { dark, GlobalStyle, light } from "./globals/theme";

function App() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  useEffect(() => {
    saveToLocalStorage("boards", state.boards);
    saveToLocalStorage("active-board", state.data.activeBoard);
    saveToLocalStorage("sidebars-open", `${state.data.sideBarsOpen}`);
    saveToLocalStorage("theme", state.data.theme);
  }, [state]);

  console.log(useAppSelector((state) => state));

  return (
    <ThemeProvider theme={state.data.theme === "light" ? light : dark}>
      <GlobalStyle />
      <AppWrapper
        sidebarOpen={state.data.sideBarsOpen === "true" ? true : false}
      >
        <Sidebar />
        <Navbar
          sidebarOpen={state.data.sideBarsOpen === "true" ? true : false}
        />
        <button onClick={() => dispatch(toggleTheme())}>Toggle</button>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { AppWrapper } from "./App.style";
import { useAppSelector } from "./app/hooks";
import Board from "./components/Board/Board";
import Modal from "./components/Modals/Modal";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useMatchMedia } from "./hooks/useMatchMedia";
import { saveToLocalStorage } from "./utils/localStorage";

import { dark, GlobalStyle, light } from "./globals/theme";

function App() {
  const state = useAppSelector((state) => state);
  const { isMobileSize } = useMatchMedia();

  useEffect(() => {
    saveToLocalStorage("boards", state.boards);
    saveToLocalStorage("active-board", state.data.activeBoard);
    saveToLocalStorage("sidebars-open", `${state.data.sideBarsOpen}`);
    saveToLocalStorage("theme", state.data.theme);
  }, [state]);

  console.log(state);

  return (
    <ThemeProvider theme={state.data.theme === "light" ? light : dark}>
      <GlobalStyle />
      <AppWrapper
        sidebarOpen={state.data.sideBarsOpen === "true" ? true : false}
      >
        {state.modal.modalIsOpen && <Modal />}
        {!isMobileSize && <Sidebar />}
        <Navbar />
        {state.boards
          .filter((board) => board.name === state.data.activeBoard)
          .map((board, i) => {
            if (i === 0) {
              return <Board board={board} />;
            } else {
              return null;
            }
          })}
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

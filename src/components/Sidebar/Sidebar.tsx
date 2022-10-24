import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleActiveBoard } from "../../features/dataSlice";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import {
  BoardTab,
  BoardTabsContainer,
  BoardTabsWrapper,
  Heading,
  NewBoardButton,
  SidebarContainer,
} from "./Sidebar.style";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { boards, data } = useAppSelector((state) => state);

  return (
    <SidebarContainer open={data.sideBarsOpen === "false" ? true : false}>
      <BoardTabsContainer>
        <Heading>ALL BOARDS ({boards.length})</Heading>
        <BoardTabsWrapper>
          {boards.map((board, index) => (
            <BoardTab
              active={data.activeBoard === board.name ? true : false}
              key={index}
              onClick={() => dispatch(toggleActiveBoard({ board: board.name }))}
            >
              {board.name}
            </BoardTab>
          ))}
          <NewBoardButton>+ Create New Board</NewBoardButton>
        </BoardTabsWrapper>
      </BoardTabsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

import React from "react";
import { appBoard } from "../../types/boardTypes";
import BoardColumn from "../BoardColumn/BoardColumn";
import { Container } from "./Board.style";

interface BoardProps {
  board: appBoard;
}

function Board({ board }: BoardProps) {
  return (
    <Container>
      {board.columns.map((column, i) => (
        <BoardColumn column={column} />
      ))}
    </Container>
  );
}

export default Board;

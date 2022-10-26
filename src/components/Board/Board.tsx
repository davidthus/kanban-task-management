import React from "react";
import { appBoard } from "../../types/boardTypes";
import BoardColumn from "../BoardColumn/BoardColumn";
import { Container, NewColumnButton } from "./Board.style";

interface BoardProps {
  board: appBoard;
}

function Board({ board }: BoardProps) {
  return (
    <Container>
      {board.columns.map((column, i) => (
        <BoardColumn key={i} index={i} column={column} />
      ))}
      <NewColumnButton>+ New Column</NewColumnButton>
    </Container>
  );
}

export default Board;

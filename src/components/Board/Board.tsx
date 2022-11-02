import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openModal } from "../../features/modalSlice";
import { appBoard } from "../../types/boardTypes";
import BoardColumn from "../BoardColumn/BoardColumn";
import { Container, NewColumnButton } from "./Board.style";

interface BoardProps {
  board: appBoard;
}

function Board({ board }: BoardProps) {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state);

  return (
    <Container>
      {board.columns.map((column, i) => (
        <BoardColumn key={i} index={i} column={column} />
      ))}
      <NewColumnButton
        onClick={() =>
          dispatch(
            openModal({
              modalType: "edit-board",
              modalDetail: {
                title: "",
                status: "",
                board: data.activeBoard,
              },
            })
          )
        }
      >
        + New Column
      </NewColumnButton>
    </Container>
  );
}

export default Board;

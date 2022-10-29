import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deleteBoard } from "../../../features/boardsSlice";
import { toggleActiveBoard } from "../../../features/dataSlice";
import { closeModal } from "../../../features/modalSlice";
import { ButtonDestructive, ButtonSecondary } from "../../../shared/buttons";
import { ButtonsWrapper, Heading, Message, Wrapper } from "./DeleteBoard.style";

function DeleteBoard() {
  const { boards } = useAppSelector((state) => state);
  const { modalDetail } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const dispatchPayload = {
    boardName: modalDetail.board,
  };

  return (
    <Wrapper>
      <Heading>Delete this board?</Heading>
      <Message>
        Are you sure you want to delete the ‘{modalDetail.board}’ board? This
        action will remove all columns and tasks and cannot be reversed.
      </Message>
      <ButtonsWrapper>
        <ButtonDestructive
          disabled={boards.length === 1 ? true : false}
          onClick={() => {
            if (boards.length === 1) {
              return;
            } else {
              if (
                boards.findIndex(
                  (board) => board.name === modalDetail.board
                ) === 0
              ) {
                dispatch(toggleActiveBoard({ board: boards[1].name }));
              } else {
                dispatch(toggleActiveBoard({ board: boards[0].name }));
              }

              dispatch(deleteBoard(dispatchPayload));
              dispatch(closeModal());
            }
          }}
        >
          Delete
        </ButtonDestructive>
        <ButtonSecondary onClick={() => dispatch(closeModal())}>
          Cancel
        </ButtonSecondary>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default DeleteBoard;

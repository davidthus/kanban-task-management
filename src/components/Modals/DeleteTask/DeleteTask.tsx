import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deleteTask } from "../../../features/boardsSlice";
import { closeModal } from "../../../features/modalSlice";
import { ButtonDestructive, ButtonSecondary } from "../../../shared/buttons";
import { ButtonsWrapper, Heading, Message, Wrapper } from "./DeleteTask.style";

function DeleteTask() {
  const { modalDetail } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const dispatchPayload = {
    taskIndex: modalDetail.index,
    columnName: modalDetail.status,
    boardName: modalDetail.board,
  };

  return (
    <Wrapper>
      <Heading>Delete this task?</Heading>
      <Message>
        Are you sure you want to delete the ‘{modalDetail.title}’ task and its
        subtasks? This action cannot be reversed.
      </Message>
      <ButtonsWrapper>
        <ButtonDestructive
          onClick={() => {
            dispatch(deleteTask(dispatchPayload));
            dispatch(closeModal());
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

export default DeleteTask;

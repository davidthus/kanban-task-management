import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { CheckIcon } from "../../../assets";
import { toggleSubtask } from "../../../features/boardsSlice";
import { taskSubtask } from "../../../types/boardTypes";
import { CheckBox, Container, SubtaskTitle } from "./Subtask.style";

interface SubtaskProps {
  subtask: taskSubtask;
}

function Subtask({ subtask }: SubtaskProps) {
  const dispatch = useAppDispatch();
  const { title, status, board } = useAppSelector(
    (state) => state.modal.modalDetail
  );

  const dispatchPayload = {
    boardName: board,
    columnName: status,
    taskName: title,
    subtaskName: subtask.title,
  };

  return (
    <Container onClick={() => dispatch(toggleSubtask(dispatchPayload))}>
      <CheckBox completed={subtask.isCompleted ? true : false}>
        {subtask.isCompleted && <CheckIcon />}
      </CheckBox>
      <SubtaskTitle completed={subtask.isCompleted ? true : false}>
        {subtask.title}
      </SubtaskTitle>
    </Container>
  );
}

export default Subtask;

import React, { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { VerticalDotsIcon } from "../../../assets";
import { findTask } from "../../../utils/findObject";
import SubtasksCompleted from "../../../utils/subtasksCompleted";
import Subtask from "../Subtask/Subtask";
import {
  DeleteButton,
  Description,
  EditButton,
  NumOfSubtasks,
  Popout,
  SubtasksContainer,
  SubtasksWrapper,
  TaskTitle,
  TopWrapper,
  VerticalDotsWrapper,
  Wrapper,
} from "./ViewTask.style";

function ViewTask() {
  const [popoutOpen, setPopoutOpen] = useState(false);
  const state = useAppSelector((state) => state);
  const task = findTask({
    modalDetail: state.modal.modalDetail,
    boards: state.boards,
  });

  return (
    <Wrapper>
      <TopWrapper>
        <TaskTitle>{task?.title}</TaskTitle>
        <VerticalDotsWrapper onClick={() => setPopoutOpen((prev) => !prev)}>
          <VerticalDotsIcon />
          {popoutOpen && (
            <Popout>
              <EditButton>Edit Task</EditButton>
              <DeleteButton>Delete Task</DeleteButton>
            </Popout>
          )}
        </VerticalDotsWrapper>
      </TopWrapper>
      {task?.description ? (
        <Description>{task.description}</Description>
      ) : (
        <Description>No description</Description>
      )}
      {task?.subtasks && (
        <SubtasksContainer>
          <NumOfSubtasks>
            Subtasks ({SubtasksCompleted({ subtasks: task.subtasks })})
          </NumOfSubtasks>
          <SubtasksWrapper>
            {task.subtasks.map((subtask, i) => (
              <Subtask key={i} subtask={subtask} />
            ))}
          </SubtasksWrapper>
        </SubtasksContainer>
      )}
    </Wrapper>
  );
}

export default ViewTask;

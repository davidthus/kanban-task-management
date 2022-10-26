import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openModal } from "../../features/modalSlice";
import { boardColumn, taskSubtask } from "../../types/boardTypes";
import subtasksCompleted from "../../utils/subtasksCompleted";
import {
  SubtasksCompleted,
  TaskCardContainer,
  TaskHeading,
} from "./TaskCard.style";

interface TaskCardProps {
  title: string;
  subtasks: taskSubtask[];
  column: boardColumn;
}

function TaskCard({ title, subtasks, column }: TaskCardProps) {
  const { activeBoard } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  return (
    <TaskCardContainer>
      <TaskHeading
        onClick={() =>
          dispatch(
            openModal({
              modalType: "view-task",
              modalDetail: {
                title: title,
                status: column.name,
                board: activeBoard,
              },
            })
          )
        }
      >
        {title}
      </TaskHeading>
      <SubtasksCompleted>
        {subtasksCompleted({ subtasks })} subtasks
      </SubtasksCompleted>
    </TaskCardContainer>
  );
}

export default TaskCard;

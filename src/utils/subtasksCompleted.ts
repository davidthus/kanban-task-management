import { taskSubtask } from "../types/boardTypes";

interface SubtasksCompletedProps {
  subtasks: taskSubtask[];
}

export default function SubtasksCompleted({
  subtasks,
}: SubtasksCompletedProps) {
  const TotalNumberOfSubtasks = subtasks.length;
  const NumOfCompletedSubtasks = subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;

  return `${NumOfCompletedSubtasks} of ${TotalNumberOfSubtasks}`;
}

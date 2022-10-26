import React from "react";
import { boardColumn } from "../../types/boardTypes";
import TaskCard from "../TaskCard/TaskCard";
import {
  BlueCircle,
  ColumnName,
  Container,
  GreenCircle,
  PurpleCircle,
} from "./BoardColumn.style";

interface BoardColumnProps {
  column: boardColumn;
}

function BoardColumn({ column }: BoardColumnProps) {
  return (
    <Container>
      <ColumnName>
        {column.name.toLowerCase() === "todo" && <BlueCircle />}
        {column.name.toLowerCase() === "doing" && <PurpleCircle />}
        {column.name.toLowerCase() === "done" && <GreenCircle />}
        {column.name} ({column.tasks.length})
      </ColumnName>
      {column.tasks.map((task, i) => (
        <TaskCard column={column} title={task.title} subtasks={task.subtasks} />
      ))}
    </Container>
  );
}

export default BoardColumn;

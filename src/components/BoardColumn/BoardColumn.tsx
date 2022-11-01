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
  index: number;
}

function BoardColumn({ column, index }: BoardColumnProps) {
  return (
    <Container>
      <ColumnName>
        {index === 0 && <BlueCircle />}
        {index === 1 && <PurpleCircle />}
        {index === 2 && <GreenCircle />}
        {column.name} ({column.tasks.length})
      </ColumnName>
      {column.tasks.map((task, i) => (
        <TaskCard
          key={i}
          column={column}
          title={task.title}
          subtasks={task.subtasks}
          index={i}
        />
      ))}
    </Container>
  );
}

export default BoardColumn;

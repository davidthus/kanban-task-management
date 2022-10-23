export interface taskSubtask {
  title: string;
  isCompleted: boolean;
}

export interface columnTask {
  title: string;
  description: string;
  status: string;
  subtasks: taskSubtask[];
}

export interface boardColumn {
  name: string;
  tasks: columnTask[];
}

export interface appBoard {
  name: string;
  columns: boardColumn[];
}

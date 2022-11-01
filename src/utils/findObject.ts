import { appBoard } from "../types/boardTypes";

interface modalDetail {
  title: string;
  status: string;
  board: string;
  index?: number;
}

interface findTaskProps {
  modalDetail: modalDetail;
  boards: appBoard[];
}

export function findTask({ modalDetail, boards }: findTaskProps) {
  const board = boards.find((board) => board.name === modalDetail.board);
  const column =
    board && board.columns.find((column) => column.name === modalDetail.status);
  if (modalDetail.index) {
    return column?.tasks[modalDetail.index];
  } else {
    return column?.tasks.find((task) => task.title === modalDetail.title);
  }
}

export function findColumn({ modalDetail, boards }: findTaskProps) {
  const board = boards.find((board) => board.name === modalDetail.board);
  return (
    board && board.columns.find((column) => column.name === modalDetail.status)
  );
}

export function findBoard({ modalDetail, boards }: findTaskProps) {
  return boards.find((board) => board.name === modalDetail.board);
}

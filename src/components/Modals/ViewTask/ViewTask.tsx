import React, { useState } from "react";
import Select from "react-select";
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { VerticalDotsIcon } from "../../../assets";
import { changeTaskStatus } from "../../../features/boardsSlice";
import { changeModalsDetail, openModal } from "../../../features/modalSlice";
import { Subheading, Title } from "../../../shared/modals";
import { themeObject } from "../../../types/themeTypes";
import { findTask } from "../../../utils/findObject";
import SubtasksCompleted from "../../../utils/subtasksCompleted";
import Subtask from "../Subtask/Subtask";
import {
  DeleteButton,
  Description,
  EditButton,
  Popout,
  SelectWrapper,
  SubtasksContainer,
  SubtasksWrapper,
  TopWrapper,
  VerticalDotsWrapper,
  Wrapper,
} from "./ViewTask.style";

function ViewTask() {
  const dispatch = useAppDispatch();
  const [popoutOpen, setPopoutOpen] = useState(false);
  const state = useAppSelector((state) => state);
  const task = findTask({
    modalDetail: state.modal.modalDetail,
    boards: state.boards,
  });
  const theme: themeObject = useTheme();

  const indexOfActiveBoard = state.boards.findIndex(
    (board) => board.name === state.data.activeBoard
  );

  const dropdownOptions = state.boards[indexOfActiveBoard].columns.map(
    (column, i) => {
      return { value: column.name, label: column.name };
    }
  );

  function handleChange(selectedOption: any) {
    if (selectedOption.value === task?.status) {
      return;
    } else {
      dispatch(
        changeTaskStatus({
          boardName: state.modal.modalDetail.board,
          columnName: state.modal.modalDetail.status,
          taskIndex: state.modal.modalDetail.index,
          newColumnName: selectedOption.value,
        })
      );
      dispatch(
        changeModalsDetail({
          board: state.modal.modalDetail.board,
          status: selectedOption.value,
          title: state.modal.modalDetail.title,
          index: state.modal.modalDetail.index,
        })
      );
    }
  }

  const customStyles = {
    control: (styles: any, state: any) => ({
      ...styles,
      border: `1px solid ${theme.dropDownBorder}`,
      backgroundColor: theme.taskBg,
      outline: "0px solid",
      cursor: "pointer",
      "&:hover": {
        border: `1px solid ${theme.buttonPrimaryBg}`,
      },
      "&:focus": {
        border: `1px solid ${theme.buttonPrimaryBg}`,
      },
    }),
    input: (styles: any) => ({
      display: "none",
    }),
    menuList: (styles: any) => ({
      backgroundColor: theme.dropDownBg,
    }),
    singleValue: (styles: any) => ({
      color: theme.textPrimary,
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontWeight: "500",
      fontSize: "13px",
      lineHeight: "23px",
    }),
    placeholder: (styles: any) => ({
      color: theme.grey,
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontWeight: "500",
      fontSize: "13px",
      lineHeight: "23px",
    }),

    option: (styles: any) => ({
      ...styles,
      backgroundColor: theme.dropDownBg,
      color: theme.grey,
      cursor: "pointer",
      fontFamily: "Plus Jakarta Sans,sans-serif",
      fontWeight: "500",
      fontSize: " 13px",
      lineHeight: "23px",
      padding: ".4rem .7rem",
    }),
    indicatorSeparator: (styles: any) => ({
      width: 0,
    }),
  };

  return (
    <Wrapper>
      {task && (
        <>
          <TopWrapper>
            <Title>{task.title}</Title>
            <VerticalDotsWrapper onClick={() => setPopoutOpen((prev) => !prev)}>
              <VerticalDotsIcon />
              {popoutOpen && (
                <Popout>
                  <EditButton>Edit Task</EditButton>
                  <DeleteButton
                    onClick={() =>
                      dispatch(
                        openModal({
                          modalDetail: state.modal.modalDetail,
                          modalType: "delete-task",
                        })
                      )
                    }
                  >
                    Delete Task
                  </DeleteButton>
                </Popout>
              )}
            </VerticalDotsWrapper>
          </TopWrapper>
          {task.description ? (
            <Description>{task.description}</Description>
          ) : (
            <Description>No description</Description>
          )}

          <SubtasksContainer>
            <Subheading>
              Subtasks ({SubtasksCompleted({ subtasks: task.subtasks })})
            </Subheading>
            <SubtasksWrapper>
              {task.subtasks.map((subtask, i) => (
                <Subtask key={i} index={i} subtask={subtask} />
              ))}
            </SubtasksWrapper>
          </SubtasksContainer>

          <SelectWrapper>
            <Subheading>Current Status</Subheading>
            <Select
              value={{ value: task?.status, label: task?.status }}
              options={dropdownOptions}
              onChange={handleChange}
              styles={customStyles}
              defaultValue={{ value: task?.status, label: task?.status }}
            />
          </SelectWrapper>
        </>
      )}
    </Wrapper>
  );
}

export default ViewTask;

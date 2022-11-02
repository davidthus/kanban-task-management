import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import Select from "react-select";
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { editTask } from "../../../features/boardsSlice";
import { closeModal } from "../../../features/modalSlice";
import { ButtonSecondary, PrimaryButtonS } from "../../../shared/buttons";
import {
  ErrorText,
  FieldWrapper,
  Input,
  Subheading,
  Textarea,
  Title,
} from "../../../shared/modals";
import { taskSubtask } from "../../../types/boardTypes";
import { findTask } from "../../../utils/findObject";
import FormFieldArray from "../../FormFieldArray/FormFieldArray";
import { Section, SubtasksContainer, Wrapper } from "./EditTask.style";

function EditTask() {
  const dispatch = useAppDispatch();
  const { data, modal, boards } = useAppSelector((state) => state);
  const currentBoard = boards.find((board) => board.name === data.activeBoard);
  const task = findTask({
    boards: boards,
    modalDetail: modal.modalDetail,
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: task?.title,
      description: task?.description,
      status: {
        value: task?.status,
        label: task?.status,
      },
      subtasks: task?.subtasks,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subtasks",
    rules: { required: "Can't be empty" },
  });
  const theme = useTheme();

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

  const dropdownOptions = currentBoard?.columns.map((column) => ({
    value: column.name,
    label: column.name,
  }));

  interface onSubmitProps {
    title: string | undefined;
    description: string | undefined;
    status: { value: string | undefined; label: string | undefined };
    subtasks: taskSubtask[] | undefined;
  }

  const onSubmit = handleSubmit((formData: onSubmitProps) => {
    const { title, description, status, subtasks } = formData;

    dispatch(
      editTask({
        oldColumnName: modal.modalDetail.status,
        boardName: data.activeBoard,
        columnName: status.value,
        index: modal.modalDetail.index,
        task: { title, description, subtasks, status: status.value },
      })
    );
    dispatch(closeModal());
  });

  return (
    <Wrapper onSubmit={onSubmit}>
      <Title>Edit Task</Title>
      <Section>
        <Subheading>Title</Subheading>
        <FieldWrapper>
          <Input
            error={errors.title?.message ? true : false}
            {...register("title", { required: "Can't be empty" })}
            placeholder="e.g. Take coffee break"
          />
          {errors.title?.message && (
            <ErrorText>{errors.title.message}</ErrorText>
          )}
        </FieldWrapper>
      </Section>
      <Section>
        <Subheading>Description</Subheading>
        <Textarea
          {...register("description")}
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
        ></Textarea>
      </Section>
      <Section>
        <Subheading>Subtasks</Subheading>
        <SubtasksContainer>
          {fields.map((field, index) => (
            <FormFieldArray
              fields={fields}
              key={field.id}
              remove={remove}
              register={register}
              index={index}
              field={field}
              error={errors.subtasks && errors?.subtasks[index]?.title}
              subtask
            />
          ))}
        </SubtasksContainer>
        <ButtonSecondary
          onClick={() => append({ isCompleted: false, title: "" })}
        >
          + Add New Subtask
        </ButtonSecondary>
      </Section>
      <Section>
        <Subheading>Status</Subheading>
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              styles={customStyles}
              options={dropdownOptions}
            />
          )}
        />
      </Section>
      <PrimaryButtonS type="submit">Save Changes</PrimaryButtonS>
    </Wrapper>
  );
}

export default EditTask;

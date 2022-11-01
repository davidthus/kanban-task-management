import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import Select from "react-select";
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addTask } from "../../../features/boardsSlice";
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
import FormSubtask from "../../FormSubtask/FormSubtask";
import { Section, SubtasksContainer, Wrapper } from "./AddTask.style";

function AddTask() {
  const dispatch = useAppDispatch();
  const { data, boards } = useAppSelector((state) => state);
  const currentBoard = boards.find((board) => board.name === data.activeBoard);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      status: {
        value: currentBoard?.columns[0].name,
        label: currentBoard?.columns[0].name,
      },
      subtasks: [{ value: "" }, { value: "" }],
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
    title: string;
    description: string;
    status: { value: string | undefined; label: string | undefined };
    subtasks: { value: string }[];
  }

  const onSubmit = handleSubmit((formData: onSubmitProps) => {
    const { title, description, status, subtasks } = formData;

    const subtasksArray = subtasks.map((subtask) => ({
      title: subtask.value,
      isCompleted: false,
    }));

    dispatch(
      addTask({
        boardName: data.activeBoard,
        columnName: status.value,
        task: { title, description, subtasks: subtasksArray },
      })
    );
    dispatch(closeModal());
  });

  return (
    <Wrapper onSubmit={onSubmit}>
      <Title>Add New Task</Title>
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
            <FormSubtask
              fields={fields}
              key={field.id}
              remove={remove}
              register={register}
              index={index}
              field={field}
              error={errors.subtasks && errors?.subtasks[index]?.value}
            />
          ))}
        </SubtasksContainer>
        <ButtonSecondary onClick={() => append({ value: "" })}>
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
      <PrimaryButtonS type="submit">Create Task</PrimaryButtonS>
    </Wrapper>
  );
}

export default AddTask;

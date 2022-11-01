import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { editBoard } from "../../../features/boardsSlice";
import { toggleActiveBoard } from "../../../features/dataSlice";
import { closeModal } from "../../../features/modalSlice";
import { ButtonSecondary, PrimaryButtonS } from "../../../shared/buttons";
import {
  ErrorText,
  FieldWrapper,
  Input,
  Subheading,
  Title,
} from "../../../shared/modals";
import { boardColumn } from "../../../types/boardTypes";
import { findBoard } from "../../../utils/findObject";
import FormFieldArray from "../../FormFieldArray/FormFieldArray";
import { ColumnsContainer, Section, Wrapper } from "./EditBoard.style";

function EditBoard() {
  const {
    boards,
    data: { activeBoard },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const board = findBoard({
    boards: boards,
    modalDetail: { board: activeBoard },
  });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: board?.name,
      columns: board?.columns,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns",
  });

  interface onSubmitProps {
    name: string | undefined;
    columns: boardColumn[] | undefined;
  }

  const onSubmit = handleSubmit((formData: onSubmitProps) => {
    let updatedColumns =
      formData.columns &&
      formData?.columns.map((column) => {
        const columnName = column.name;
        return {
          ...column,
          tasks: column.tasks.map((task) => ({
            ...task,
            status: columnName,
          })),
        };
      });

    dispatch(
      editBoard({
        newBoard: { ...formData, columns: updatedColumns },
        activeBoard,
      })
    );
    dispatch(closeModal());
    dispatch(toggleActiveBoard({ board: formData.name }));
  });

  return (
    <Wrapper onSubmit={onSubmit}>
      <Title>Add New Board</Title>
      <Section>
        <Subheading>Name</Subheading>
        <FieldWrapper>
          <Input
            error={
              errors.name?.message || errors.name?.type === "validate"
                ? true
                : false
            }
            {...register("name", {
              required: "Can't be empty",
              validate: (value) => {
                return (
                  value &&
                  !boards.some((board) => {
                    if (value === activeBoard) {
                      return false;
                    } else if (
                      board.name.toLowerCase() === value.toLowerCase()
                    ) {
                      return true;
                    } else {
                      return false;
                    }
                  })
                );
              },
            })}
            placeholder="e.g. Web Design"
          />
          {errors.name && errors.name.type === "required" && (
            <ErrorText>{errors.name.message}</ErrorText>
          )}
          {errors.name && errors.name.type === "validate" && (
            <ErrorText>Already Used</ErrorText>
          )}
        </FieldWrapper>
      </Section>
      <Section>
        <Subheading>Columns</Subheading>
        <ColumnsContainer>
          {fields.map((field, index) => (
            <FormFieldArray
              fields={fields}
              key={field.id}
              remove={remove}
              register={register}
              index={index}
              field={field}
              error={errors.columns && errors?.columns[index]?.name}
            />
          ))}
        </ColumnsContainer>
        <ButtonSecondary onClick={() => append({ name: "", tasks: [] })}>
          + Add New Column
        </ButtonSecondary>
      </Section>
      <PrimaryButtonS type="submit">Create New Board</PrimaryButtonS>
    </Wrapper>
  );
}

export default EditBoard;

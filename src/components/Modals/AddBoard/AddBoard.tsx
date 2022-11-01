import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addBoard } from "../../../features/boardsSlice";
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
import FormFieldArray from "../../FormFieldArray/FormFieldArray";
import { ColumnsContainer, Section, Wrapper } from "./AddBoard.style";

function AddBoard() {
  const { boards } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      columns: [
        { name: "Todo", tasks: [] },
        { name: "Doing", tasks: [] },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns",
  });

  interface onSubmitProps {
    name: string;
    columns: { name: string; tasks: never[] }[];
  }

  const onSubmit = handleSubmit((formData: onSubmitProps) => {
    dispatch(addBoard(formData));
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
                return !boards.some(
                  (board) => board.name.toLowerCase() === value.toLowerCase()
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

export default AddBoard;

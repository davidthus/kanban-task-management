import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../app/hooks";
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
            error={errors.name?.message ? true : false}
            {...register("name", { required: "Can't be empty" })}
            placeholder="e.g. Web Design"
          />
          {errors.name?.message && <ErrorText>{errors.name.message}</ErrorText>}
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
          + Add New Subtask
        </ButtonSecondary>
      </Section>
      <PrimaryButtonS type="submit">Create Task</PrimaryButtonS>
    </Wrapper>
  );
}

export default AddBoard;

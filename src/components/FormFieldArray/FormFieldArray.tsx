import React from "react";
import { ErrorText, FieldWrapper, Input } from "../../shared/modals";
import { CrossIcon, CrossWrapper, Wrapper } from "./FormFieldArray.style";

interface FormFieldArrayProps {
  field: object & { id: string };
  remove: (index?: number | number[]) => void;
  register: (
    name: any,
    RegisterOptions?: any
  ) => { onChange: any; onBlur: any; name: any; ref: any };
  index: number;
  fields: object & { id: string }[];
  error: any;
  subtask?: boolean;
}

function FormFieldArray({
  error,
  field,
  index,
  register,
  remove,
  fields,
  subtask,
}: FormFieldArrayProps) {
  let placeholder = "";
  if (subtask) {
    if (index === 0) placeholder = "e.g. Make a coffee";
    if (index === 1) placeholder = "e.g. Drink coffee & smile";
  }

  return (
    <Wrapper>
      <FieldWrapper>
        {subtask ? (
          <Input
            error={error?.message && true}
            placeholder={placeholder}
            key={field.id}
            {...register(`subtasks.${index}.title` as const, {
              required: "Can't be empty",
            })}
          />
        ) : (
          <Input
            error={error?.message && true}
            placeholder={placeholder}
            key={field.id}
            {...register(`columns.${index}.name` as const, {
              required: "Can't be empty",
            })}
          />
        )}
        {error?.message && <ErrorText>{error.message}</ErrorText>}
      </FieldWrapper>
      <CrossWrapper
        disabled={fields.length <= 1 ? true : false}
        onClick={() => {
          if (fields.length <= 1) return;
          remove(index);
        }}
      >
        <CrossIcon
          disabled={fields.length <= 1 ? true : false}
          width="15"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#828FA3" fillRule="evenodd">
            <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
            <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
          </g>
        </CrossIcon>
      </CrossWrapper>
    </Wrapper>
  );
}

export default FormFieldArray;

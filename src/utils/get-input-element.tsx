import Input from "@/components/common/FormUI/Input";
import Label from "@/components/common/Label";
import { FlexColumn } from "@/components/common/layout";

type InputFieldProps = {
  field: {
    id: string;
    label: string;
    inputType: string;
    placeholder: string;
    required: boolean;
    validationSchema?: Record<string, any>;
  };
  errors: Record<string, any>;
  register: any;
};

export const getInputElement = ({
  field,
  errors,
  register,
}: InputFieldProps) => {
  const { id, inputType, placeholder, required, label, validationSchema } =
    field;

  // register the input with validation schema and required checks
  const fieldValidation = {
    required: required ? `${label} is required` : false,
    validate: required
      ? {
          ...validationSchema,
          noWhitespace: (value: string) =>
            (typeof value === "string" && value.trim() !== "") || "Required",
        }
      : validationSchema,
  };

  return (
    <FlexColumn gap={1}>
      <Label>{label}</Label>
      <Input
        type={inputType}
        placeholder={placeholder}
        {...register(id, fieldValidation)}
        className={`${errors[id] && "border-red-500"}`}
      />
      {errors[id] && (
        <span className="text-sm text-red-500">{errors[id]?.message}</span>
      )}
    </FlexColumn>
  );
};

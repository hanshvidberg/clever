import { Path, useFormContext, UseFormRegister } from "react-hook-form";
import { motion } from "framer-motion";
import { FormData } from "./MultiStepForm/MultiStepForm";

type BaseField = {
  name: Path<FormData>;
  label: string;
};

type CheckboxField = BaseField & {
  type: "checkbox";
};

type Field = CheckboxField;

export type StepConfig = {
  title: string;
  description?: string;
  fields: Field[];
};

type GenericFormStepProps = {
  config: StepConfig;
  direction?: number;
  layoutId?: string;
  nextStep?: () => void;
  onChange?: (value: Path<FormData>, checked?: boolean) => void;
};

const renderField = (
  field: Field,
  register: UseFormRegister<FormData>,
  onChange: GenericFormStepProps["onChange"]
) => {
  switch (field.type) {
    case "checkbox":
      return (
        <label className="flex items-center space-x-4 cursor-pointer bg-gray-300 p-4">
          <div className="relative">
            <input
              {...register(field.name, {
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange?.(
                    e.target.value as Path<FormData>,
                    e.target.checked
                  ),
              })}
              value={field.name}
              type="checkbox"
              className="peer sr-only"
            />
            <div className="h-6 w-6 text-transparent peer-checked:text-white border-2 border-[#1B3B36] peer-checked:bg-[#1B3B36] transition-all duration-200 peer-focus:ring-2 peer-focus:ring-[#1B3B36] peer-focus:ring-offset-2 ">
              <svg
                className="h-5 w-5   peer-checked:opacity-100 absolute top-0.5 left-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <span className="text-gray-700">{field.label}</span>
        </label>
      );
  }
};

export const GenericFormStep = ({ config, onChange }: GenericFormStepProps) => {
  const { register } = useFormContext();

  return (
    <motion.div className="space-y-8">
      <motion.h2 className="text-3xl font-light text-primary">
        {config.title}
      </motion.h2>
      {config.description && (
        <motion.p className="text-gray-600">{config.description}</motion.p>
      )}
      <motion.div className="space-y-4">
        {config.fields.map((field) => (
          <div key={field.name} className="space-y-1">
            {field.type !== "checkbox" && (
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
            )}
            {renderField(field, register, onChange)}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

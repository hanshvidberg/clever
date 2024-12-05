import { useFormContext } from "react-hook-form";
import { motion } from "motion/react";
import { slideVariants, containerVariants } from "./animations";

type StepProps = {
  direction: number;
  layoutId: string;
};

export const StepTwo = ({ direction, layoutId }: StepProps) => {
  const { register } = useFormContext();

  return (
    <>
      <motion.div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </motion.div>
      <motion.div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          {...register("phone")}
          type="tel"
          id="phone"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </motion.div>
    </>
  );
};

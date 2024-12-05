import { useFormContext } from "react-hook-form";
import { motion } from "motion/react";
import { slideVariants, containerVariants } from "./animations";

export const StepThree = () => {
  const { register } = useFormContext();

  return (
    <motion.div className="space-y-4">
      <motion.h2 className="text-2xl font-bold">Address Information</motion.h2>
      <motion.div className="space-y-4">
        <div>
          <label
            htmlFor="street"
            className="block text-sm font-medium text-gray-700"
          >
            Street Address
          </label>
          <input
            {...register("street", { required: "Street address is required" })}
            type="text"
            id="street"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              {...register("city", { required: "City is required" })}
              type="text"
              id="city"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-gray-700"
            >
              ZIP Code
            </label>
            <input
              {...register("zipCode", { required: "ZIP code is required" })}
              type="text"
              id="zipCode"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

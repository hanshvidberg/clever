import { useFormContext } from "react-hook-form";
import { motion } from "motion/react";
import { slideVariants, containerVariants } from "./animations";

type StepProps = {
  direction: number;
  layoutId: string;
};

export const StepFour = ({ direction, layoutId }: StepProps) => {
  const { register } = useFormContext();

  return (
    <motion.div className="space-y-4">
      <motion.h2 className="text-2xl font-bold">
        Additional Information
      </motion.h2>
      <motion.div className="space-y-4">
        <div>
          <label
            htmlFor="interests"
            className="block text-sm font-medium text-gray-700"
          >
            Interests
          </label>
          <textarea
            {...register("interests")}
            id="interests"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferences
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                {...register("newsletter")}
                type="checkbox"
                id="newsletter"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="newsletter"
                className="ml-2 block text-sm text-gray-700"
              >
                Subscribe to newsletter
              </label>
            </div>
            <div className="flex items-center">
              <input
                {...register("terms")}
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the terms and conditions
              </label>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

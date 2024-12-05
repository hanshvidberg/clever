import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import { slideVariants, containerVariants } from "./animations";
import { useEffect } from "react";

export const StepOne = ({ nextStep }: { nextStep: () => void }) => {
  const { register, watch } = useFormContext();
  const harLader = watch("harLader");

  //   useEffect(() => {
  //     if (harLader) {
  //       nextStep();
  //     }
  //   }, [harLader]);

  return (
    <motion.div>
      <motion.h2 className="text-2xl font-bold">
        Har du mulighed for at få en ladeboks derhjemme?
      </motion.h2>
      <motion.div className="space-y-4">
        <label className="flex font-medium text-gray-700 text-lg">
          <input
            {...register("harLader")}
            type="radio"
            value="ja"
            name="harLader"
            className="flex"
          />
          <span>Ja, det har jeg</span>
        </label>
      </motion.div>
      <motion.div>
        <label className="flex font-medium text-gray-700 text-lg">
          <input
            {...register("harLader")}
            type="radio"
            value="nej"
            name="harLader"
          />
          Nej, det har jeg ikke
        </label>
      </motion.div>
    </motion.div>
  );
};

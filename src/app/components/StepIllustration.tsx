import { motion, AnimatePresence } from "motion/react";

const illustrationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

type StepIllustrationType = {
  step: number;
};

export const StepIllustration = ({ step }: StepIllustrationType) => {
  if (step > 4) {
    return null;
  }
  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={step}
          variants={illustrationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          src={`/images/step-${step}.png`}
          alt={`Step ${step} illustration`}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

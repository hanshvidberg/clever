"use client";
import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { useRouter, useSearchParams } from "next/navigation";

type FormData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  zipCode?: string;
  interests?: string;
  newsletter?: boolean;
  terms?: boolean;
};

type MultiStepFormProps = {
  onStepChange: (step: number) => void;
};

export const MultiStepForm = ({ onStepChange }: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const methods = useForm<FormData>();
  const { handleSubmit } = methods;

  useEffect(() => {
    onStepChange(currentStep);
  }, [currentStep, onStepChange]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  const nextStep = (step?: number) => {
    setDirection(1);
    // router.push(`?step=${currentStep + 1}`);
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setDirection(-1);
  };

  const renderStep = (step: number) => {
    const props = { direction, layoutId: "step", nextStep, prevStep };

    switch (step) {
      case 1:
        return <StepOne key="step1" {...props} />;
      case 2:
        return <StepTwo key="step2" {...props} />;
      case 3:
        return <StepThree key="step3" {...props} />;
      case 4:
        return <StepFour key="step4" {...props} />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= currentStep ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div> */}

        <div className="min-h-[200px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              variants={vars}
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {renderStep(currentStep)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className={`px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors ${
              currentStep === 1 ? "invisible" : ""
            }`}
          >
            Previous
          </button>
          {currentStep === 4 ? (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Next
            </button>
          )}
        </div> */}
        {<button onClick={prevStep}>Previous</button>}
        {<button onClick={nextStep}>Next</button>}
      </form>
    </FormProvider>
  );
};

const vars = {
  initial: (direction: number) => ({
    x: direction > 0 ? 10 : -10,
    opacity: 0,
    y: 0,
  }),
  animate: { x: 0, opacity: 1, y: 0 },
  exit: (direction: number) => ({
    x: direction > 0 ? -10 : 10,
    opacity: 0,
    y: 0,
  }),
};

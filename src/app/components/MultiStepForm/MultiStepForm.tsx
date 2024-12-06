"use client";
import { useState } from "react";
import { useForm, FormProvider, Path } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { GenericFormStep } from "../GenericFormStep";
import { stepConfigs } from "./formStepConfigs";
import { StepIllustration } from "../StepIllustration";
import { Receipt } from "../Receipt/Receipt";

export type FormData = {
  harLader?: {
    ja: boolean;
    nej: boolean;
  };
  hvor?: {
    hjemme: boolean;
    farten: boolean;
    begge: boolean;
  };
  arbejde?: {
    ja: boolean;
    nej: boolean;
  };
  betalingsmetode?: {
    fast: boolean;
    forbrugsafregnet: boolean;
  };
};

const defaultFormData: FormData = {
  harLader: {
    ja: false,
    nej: false,
  },
  hvor: {
    hjemme: false,
    farten: false,
    begge: false,
  },
  arbejde: {
    ja: false,
    nej: false,
  },
};

export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const methods = useForm<FormData>({
    defaultValues: defaultFormData,
  });

  const nextStep = () => {
    setDirection(1);
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep(currentStep - 1);
  };

  const onChange = (data: Path<FormData>, checked?: boolean) => {
    methods.setValue(data, checked);
    if (checked) {
      nextStep();
    }
  };

  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  console.log({ currentStep });
  return (
    <FormProvider {...methods}>
      {currentStep > stepConfigs.length ? (
        <Receipt
          goToStart={() => {
            methods.reset();
            setCurrentStep(1);
          }}
        />
      ) : (
        <div className="pt-32 px-4 md:pt-0 md:px-0 md:h-screen max-w-6xl mx-auto flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 items-center">
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <div className="md:min-h-[400px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    variants={vars}
                    custom={direction}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {currentStep <= stepConfigs.length && (
                      <GenericFormStep
                        config={stepConfigs[currentStep - 1]}
                        direction={direction}
                        layoutId={`step-${currentStep}`}
                        nextStep={nextStep}
                        onChange={onChange}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors ${
                    currentStep === 1 ? "invisible" : ""
                  }`}
                >
                  Tilbage
                </button>
                <button
                  type={"button"}
                  onClick={nextStep}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition-colors"
                >
                  {currentStep === stepConfigs.length ? "Send" : "Næste"}
                </button>
              </div>
            </form>

            <div className="md:p-8 ">
              <StepIllustration step={currentStep} />
            </div>
          </div>
        </div>
      )}
    </FormProvider>
  );
};

const vars = {
  initial: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
  }),
};

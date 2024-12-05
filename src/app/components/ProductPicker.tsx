"use client";
import { useState } from "react";
import { MultiStepForm } from "./MultiStepForm";
import { StepIllustration } from "./StepIllustration";

export const ProductPicker = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <MultiStepForm onStepChange={setCurrentStep} />
        <div className="p-8">
          <StepIllustration step={currentStep} />
        </div>
      </div>
    </div>
  );
};

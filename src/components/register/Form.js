import { useState } from "react";
import ProgressBar from "./progress/ProgressBar";
import StepsRoot from "./steps/StepsRoot";

const Form = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  return (
    <div className="box">
      <ProgressBar steps={totalSteps} currentStep={step} updateStep={setStep} />
      <StepsRoot handleOnNav={setStep} />
    </div>
  );
};

export default Form;

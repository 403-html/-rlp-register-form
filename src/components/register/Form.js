import { useState } from "react";
import ProgressBar from "../utils/ProgressBar";

const Form = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const shouldBlockButtonMin = step === 0;
  const shouldBlockButtonMax = step === totalSteps;

  return (
    <div className="box">
      <ProgressBar steps={totalSteps} currentStep={step} updateStep={setStep} />
      <button
        className="btn btn--add"
        disabled={shouldBlockButtonMax}
        onClick={() => setStep(step + 1)}
      >
        +1
      </button>
      <button
        className="btn btn--sub"
        disabled={shouldBlockButtonMin}
        onClick={() => setStep(step - 1)}
      >
        -1
      </button>
    </div>
  );
};

export default Form;

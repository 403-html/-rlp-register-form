import { Steps, Step } from "react-step-builder";

import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Navigation = ({ prev, next }) => {
  return (
    <>
      <button onClick={prev}>Back</button>
      <button onClick={next}>Next</button>
    </>
  );
};

const StepsRoot = ({ handleOnNav }) => {
  const config = {
    navigation: {
      component: Navigation,
      location: "after",
    },
  };

  return (
    <Steps config={config}>
      <Step component={Step0} />
      <Step component={Step1} />
      <Step component={Step2} />
      <Step component={Step3} />
    </Steps>
  );
};

export default StepsRoot;

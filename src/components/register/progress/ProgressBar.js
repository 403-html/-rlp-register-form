import ProgressElem from "./ProgressElem";

const classes = {
  step: "progress-step",
  divider: "progress-step__divider",
  text: "progress-step__text",
  dividerActive: "progress-step__divider--active",
  textActive: "progress-step__text--active",
};

const isLast = (curr, max) => curr === max;

const ProgressBar = ({ steps, currentStep, updateStep }) => {
  if (currentStep > steps || currentStep < 0)
    throw new Error(
      `currentStep can't be less than 0 or higher than number of steps: ${steps}`
    );

  const stepsArray = new Array(steps).fill(true);
  return (
    <div className="progress">
      {stepsArray.map((k, index) => {
        const step = index + 1;
        return (
          <ProgressElem
            classes={classes}
            value={step}
            divider={!isLast(index, stepsArray.length - 1)}
            active={step === currentStep}
            key={step}
            handleOnClick={() => updateStep(step)}
            currentStep={currentStep}
          />
        );
      })}
    </div>
  );
};

export default ProgressBar;

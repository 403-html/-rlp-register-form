const classes = {
  divider: "progress-divider",
  text: "progress-text",
  dividerActive: "progress-divider--active",
  textActive: "progress-text--active",
};

const ProgressBar = ({ steps, currentStep, updateStep }) => {
  if (currentStep > steps || currentStep < 0)
    throw new Error(
      `currentStep can't be less than 0 or higher than number of steps: ${steps}`
    );

  const renderSteps = () => {
    let content = [];
    for (let i = 1; i <= steps; i++) {
      let cachedContent;
      let barClass =
        i < currentStep
          ? `${classes.divider} ${classes.dividerActive}`
          : classes.divider;
      let textClass =
        i <= currentStep
          ? `${classes.text} ${classes.textActive}`
          : classes.text;

      if (i === steps)
        cachedContent = (
          <span className={textClass} onClick={() => updateStep(i)}>
            {i}
          </span>
        );
      else {
        cachedContent = (
          <>
            <span className={textClass} onClick={() => updateStep(i)}>
              {i}
            </span>
            <div className={barClass}></div>
          </>
        );
      }
      content.push(cachedContent);
    }
    return content;
  };
  return <div className="progress">{renderSteps()}</div>;
};

export default ProgressBar;

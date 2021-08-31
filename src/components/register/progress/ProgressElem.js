const ProgressElem = ({
  classes,
  divider = false,
  handleOnClick,
  value,
  active = false,
  currentStep,
}) => {
  const activeOrSmallerThan = active || value < currentStep;
  const smallerThanActive = value < currentStep;
  return (
    <div className={classes.step}>
      <span
        className={
          activeOrSmallerThan
            ? `${classes.text} ${classes.textActive}`
            : classes.text
        }
        onClick={() => handleOnClick()}
      >
        {value}
      </span>
      {divider && (
        <div
          className={
            smallerThanActive
              ? `${classes.divider} ${classes.dividerActive}`
              : classes.divider
          }
        ></div>
      )}
    </div>
  );
};

export default ProgressElem;

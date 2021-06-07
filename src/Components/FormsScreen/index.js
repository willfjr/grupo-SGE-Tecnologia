import React, { useState } from "react";
import FirstForm from "./FirstForm/index";
import SecondForm from "./SecondForm/index";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  Steplabel,
  Typography,
  Button,
  StepLabel,
  FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    maxWidth: "50vw",
    maxHeight: "90vh",
    padding: "5%",
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "blue",
      justifyContent: "center",
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "green",
    },
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "50px",
  },
});

const FormsScreen = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBackStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function getSteps() {
    return ["Sign Up", "Personal Information", "Address"];
  }

  const steps = getSteps();

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <FirstForm
            activeStep={activeStep}
            steps={steps}
            handleNextStep={handleNextStep}
          />
        );
      case 1:
        return (
          <SecondForm
            activeStep={activeStep}
            steps={steps}
            handleNextStep={handleNextStep}
          />
        );
      case 2:
        return "Step Three (Checkout)";
      default:
        return "Unknown Step";
    }
  }

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Stepper
          className={classes.stepper}
          alternativeLabel
          activeStep={activeStep}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          "Tudo certo!"
        ) : (
          <>{getStepsContent(activeStep)}</>
        )}
        <div className={classes.btnContainer}>
          <Button onClick={handleBackStep}>
            {activeStep !== steps.length ? "Voltar" : "Voltar"}
          </Button>
          <Button onClick={handleNextStep}>
            {activeStep === steps.length ? "Prontinho" : "Avançar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormsScreen;

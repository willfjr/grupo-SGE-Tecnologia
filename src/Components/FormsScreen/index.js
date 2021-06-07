import React, { useState } from "react";
import FirstForm from "./FirstForm/index";
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
    width: "50%",
    margin: "6rem auto",
    border: "1px solid #999",
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "blue",
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "green",
    },
  },
});

const FormsScreen = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  function getSteps() {
    return ["Sign Up", "Personal Information", "Address"];
  }

  const steps = getSteps();

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <FirstForm />;
      case 1:
        return "Step  Two (Personal Information)";
      case 2:
        return "Step Three (Checkout)";
      default:
        return "Unknown Step";
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        "Tudo certo!"
      ) : (
        <>
          {getStepsContent(activeStep)}
          <Button onClick={handleNextStep}>
            {activeStep === steps.length ? "Prontinho" : "Próximo Passo"}
          </Button>
        </>
      )}
    </div>
  );
};

export default FormsScreen;

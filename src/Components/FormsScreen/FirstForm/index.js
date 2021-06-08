import React, { useState } from "react";
import useForm from "../useForm";
import "react-intl-tel-input/dist/main.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: "5",
    width: "100%",
  },
  formContainer: {
    display: "block",
    justifyContent: "center",
    width: "28.125rem",
    height: "auto",
    padding: "2rem",
    margin: "auto",
  },
  inputField: {
    display: "flex",
    width: "28.125rem",
    height: "auto",
    margin: "1rem 0",
  },
  btn: {
    width: "100%",
    height: "3rem",
    background: "#6101F5",
    color: "#fff",
    "&:hover": {
      background: "#B813C2",
      opacity: "0.7",
      transition: "0.3s esase-in-out",
    },
  },
  disabledBtn: {
    width: "100%",
    height: "3rem",
    background: "rgb(0,0,0, 0.38)",
    color: "#fff",
  },
  errorText: {
    fontSize: "12px",
    marginLeft: "5px",
    marginBottom: "0",
    color: "red",
    fontWeight: "200",
  },
});

const FirstForm = ({ activeStep, steps, handleNextStep }) => {
  // Define the State Schema
  const stateSchema = {
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    confirmPassword: { value: "", error: "" },
  };

  const stateValidatorSchema = {
    email: {
      required: true,
      validator: {
        func: (value) =>
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
            value
          ),
        error: "Seu e-mail precisa ter o formato padrão de e-mail.",
      },
    },
    password: {
      required: true,
      validator: {
        func: (value) =>
          /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
        error:
          "Você precisará de no mínimo 6 caracteres e pelo menos um caracter especial (@,$,!,%,*,#,&)",
      },
    },
  };

  const { values, errors, dirty, handleOnChange } = useForm(
    stateSchema,
    stateValidatorSchema
  );

  const { email, password, confirmPassword } = values;

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState({ showPassword: false });
  const [showConfirmPassword, setShowConfirmPassword] = useState({
    showConfirmPassword: false,
  });

  const handleClickShowPassword = () => {
    setShowPassword({ showPassword: !showPassword.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword({
      showConfirmPassword: !showConfirmPassword.showConfirmPassword,
    });
  };

  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" style={{ color: "#999", textAlign: "center" }}>
        Cadastre-se
      </Typography>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          {/* <IntTelInput preferredCountries={["br"]} /> */}

          <TextField
            className={classes.inputField}
            label="E-mail"
            variant="outlined"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
          {errors.email && dirty.email && (
            <Typography className={classes.errorText}>
              {errors.email}
            </Typography>
          )}

          <FormControl variant="outlined" className={classes.inputField}>
            <InputLabel>Senha</InputLabel>
            <OutlinedInput
              type={showPassword.showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              labelWidth={50}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleClickShowPassword}>
                    {showPassword.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.password && dirty.password && (
              <Typography className={classes.errorText}>
                {errors.password}
              </Typography>
            )}
          </FormControl>
          <FormControl variant="outlined" className={classes.inputField}>
            <InputLabel>Confirme sua Senha</InputLabel>
            <OutlinedInput
              type={
                showConfirmPassword.showConfirmPassword ? "text" : "password"
              }
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              labelWidth={155}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={handleClickShowConfirmPassword}
                  >
                    {showConfirmPassword.showConfirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />

            {confirmPassword !== password ? (
              <Typography className={classes.errorText}>
                Ops! Sua senha está diferente.
              </Typography>
            ) : null}
          </FormControl>
          {!email ||
          !password ||
          !confirmPassword ||
          confirmPassword !== password ? (
            <Button
              className={classes.disabledBtn}
              disabled
              variant="contained"
              type="submit"
            >
              {activeStep === steps.length ? "Prontinho" : "Próximo Passo"}
            </Button>
          ) : (
            <Button
              className={classes.btn}
              variant="contained"
              onClick={handleNextStep}
              type="submit"
            >
              {activeStep === steps.length ? "Prontinho" : "Próximo Passo"}
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default FirstForm;

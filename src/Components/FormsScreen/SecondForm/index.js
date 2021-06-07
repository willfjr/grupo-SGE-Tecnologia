import React, { useState } from "react";
import useForm from "../useForm";
import IntTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField } from "@material-ui/core";

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
    background: "blue",
    color: "#fff",
    "&:hover": {
      background: "blue",
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

const SecondForm = ({ activeStep, steps, handleNextStep }) => {
  // Define the State Schema
  const stateSchema = {
    firstname: { value: "", error: "" },
    lastname: { value: "", error: "" },
    birthday: { value: "", erro: "" },
  };

  const stateValidatorSchema = {
    firstname: {
      required: true,
      validator: {
        func: (value) =>
          /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
        error: "Seu nome precisa apresentar mais de um caracter",
      },
    },
    lastname: {
      required: true,
      validator: {
        func: (value) =>
          /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(
            value
          ),
        error: "Seu sobrenome precisa conter mais de três caracteres",
      },
    },
    birthday: {
      required: false,
      validator: {
        func: (value) =>
          /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(
            value
          ),
        error: "Data de nascimento inválida.",
      },
    },
  };

  const { values, errors, dirty, handleOnChange } = useForm(
    stateSchema,
    stateValidatorSchema
  );

  const { firstname, lastname, birthday } = values;

  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" style={{ color: "#999", textAlign: "center" }}>
        Cadastre-se
      </Typography>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <TextField
            className={classes.inputField}
            label="Nome"
            variant="outlined"
            name="firstname"
            value={firstname}
            onChange={handleOnChange}
          />
          {errors.firstname && dirty.firstname && (
            <Typography className={classes.errorText}>
              {errors.firstname}
            </Typography>
          )}

          <TextField
            className={classes.inputField}
            label="Sobrenome"
            variant="outlined"
            name="lastname"
            value={lastname}
            onChange={handleOnChange}
          />
          {errors.lastname && dirty.lastname && (
            <Typography className={classes.errorText}>
              {errors.lastname}
            </Typography>
          )}

          <TextField
            className={classes.inputField}
            label="Data de nascimento"
            variant="outlined"
            // type="date"
            name="birthday"
            value={birthday}
            onChange={handleOnChange}
          />
          {errors.birthday && dirty.birthday && (
            <Typography className={classes.errorText}>
              {errors.birthday}
            </Typography>
          )}

          {/* <IntTelInput preferredCountries={["br"]} /> */}
          {!firstname || !lastname ? (
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

export default SecondForm;

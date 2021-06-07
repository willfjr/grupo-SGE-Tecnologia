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

const ThirdForm = ({ activeStep, steps, handleNextStep }) => {
  // Define the State Schema
  const stateSchema = {
    street: { value: "", error: "" },
    number: { value: "", error: "" },
    complement: { value: "", error: "" },
    neighborhood: { value: "", error: "" },
    city: { value: "", erro: "" },
    zipcode: { value: "", erro: "" },
  };

  const stateValidatorSchema = {
    street: {
      required: true,
      validator: {
        func: (value) =>
          /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(
            value
          ),
        error: "Sua rua precisa ter pelo menos três caracteres.",
      },
    },
    number: {
      required: true,
      validator: {
        func: (value) => /((?:[\d][\s]?){5}[\d])/.test(value),
        error: "Insira o número de sua residência.",
      },
    },
    complement: {
      required: true,
      validator: {
        func: (value) =>
          /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(
            value
          ),
        error: "Sua cidade precisa ter pelo menos três caracteres.",
      },
    },
    neighborhood: {
      required: true,
      validator: {
        func: (value) =>
          /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(
            value
          ),
        error: "Seu bairro precisa conter mais de três caracteres.",
      },
    },
    city: {
      required: true,
      validator: {
        func: (value) =>
          /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(
            value
          ),
        error: "Sua cidade precisa ter pelo menos três caracteres.",
      },
    },
    zipcode: {
      required: true,
      validator: {
        func: (value) => /^\d{5}-\d{3}$/.test(value),
        error: "Cep inválido.",
      },
    },
  };

  const { values, errors, dirty, handleOnChange } = useForm(
    stateSchema,
    stateValidatorSchema
  );

  const { street, number, complement, neighborhood, city, zipcode } = values;

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
            label="Rua"
            variant="outlined"
            name="street"
            value={street}
            onChange={handleOnChange}
          />
          {errors.street && dirty.streete && (
            <Typography className={classes.errorText}>
              {errors.street}
            </Typography>
          )}
          <TextField
            className={classes.inputField}
            label="Número"
            variant="outlined"
            name="number"
            value={number}
            onChange={handleOnChange}
          />
          {errors.number && dirty.number && (
            <Typography className={classes.errorText}>
              {errors.number}
            </Typography>
          )}
          <TextField
            className={classes.inputField}
            label="Complemento"
            variant="outlined"
            name="complement"
            value={complement}
            onChange={handleOnChange}
          />
          {errors.complement && dirty.complement && (
            <Typography className={classes.errorText}>
              {errors.complement}
            </Typography>
          )}
          <TextField
            className={classes.inputField}
            label="Bairro"
            variant="outlined"
            name="neighborhood"
            value={neighborhood}
            onChange={handleOnChange}
          />
          {errors.neighborhood && dirty.neighborhood && (
            <Typography className={classes.errorText}>
              {errors.neighborhood}
            </Typography>
          )}

          <TextField
            className={classes.inputField}
            label="Cidade"
            variant="outlined"
            name="city"
            value={city}
            onChange={handleOnChange}
          />
          {errors.city && dirty.city && (
            <Typography className={classes.errorText}>{errors.city}</Typography>
          )}
          <TextField
            className={classes.inputField}
            label="Cep"
            variant="outlined"
            name="zipcode"
            value={zipcode}
            onChange={handleOnChange}
          />
          {errors.zipcode && dirty.zipcode && (
            <Typography className={classes.errorText}>
              {errors.zipcode}
            </Typography>
          )}

          {!street || !number || !neighborhood || !city ? (
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

export default ThirdForm;

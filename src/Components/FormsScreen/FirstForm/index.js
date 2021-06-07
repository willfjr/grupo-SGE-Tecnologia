import React, { useState } from "react";
import IntTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Grid,
  Checkbox,
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
    justifyContent: "center",
    position: "relative",
    zIndex: "5",
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
  },
});

const FirstForm = () => {
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
    <div classNameName={classes.mainContainer}>
      <Typography variant="h5" style={{ color: "#999", textAlign: "center" }}>
        Cadastre-se
      </Typography>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <TextField
            className={classes.inputField}
            label="Nome"
            variant="outlined"
          />

          <TextField
            className={classes.inputField}
            label="Sobrenome"
            variant="outlined"
          />
          <IntTelInput preferredCountries={["br"]} />

          <TextField
            className={classes.inputField}
            label="E-mail"
            variant="outlined"
          />
          <FormControl variant="outlined" className={classes.inputField}>
            <InputLabel>Senha</InputLabel>
            <OutlinedInput
              type={showPassword.showPassword ? "text" : "password"}
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
          </FormControl>
          <FormControl variant="outlined" className={classes.inputField}>
            <InputLabel>Confirme sua Senha</InputLabel>
            <OutlinedInput
              type={
                showConfirmPassword.showConfirmPassword ? "text" : "password"
              }
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
          </FormControl>
          <Button className={classes.btn} variant="contained" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FirstForm;

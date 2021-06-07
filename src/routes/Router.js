import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CardsScreen from "../Components/CardsScreen/index";
import FormsScreen from "../Components/FormsScreen/index";
import Header from "../Components/Header";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={"/"}>
            <CardsScreen></CardsScreen>
          </Route>
          <Route exact path={"/formularios"}>
            <FormsScreen></FormsScreen>
          </Route>
          <Route>
            <div>Erro 404 - Página não encontrada :(</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

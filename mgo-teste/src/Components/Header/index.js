import React from "react";
import { useHistory } from "react-router-dom";
import { goToCardsScreen, goToFormsScreen } from "../../routes/coordinator";

const Header = () => {
  const history = useHistory();

  return (
    <>
      <div> Header </div>
      <button onClick={() => goToCardsScreen(history)}>
        Ir para tela de Cards
      </button>
      <button onClick={() => goToFormsScreen(history)}>
        Ir para tela de Formulários
      </button>
    </>
  );
};

export default Header;

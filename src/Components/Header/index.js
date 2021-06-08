import React from "react";
import { useHistory } from "react-router-dom";
import { goToCardsScreen, goToFormsScreen } from "../../routes/coordinator";
import { Container, Content } from "./styled";
const Header = () => {
  const history = useHistory();
  return (
    <>
      <Container>
        <Content>
          <button onClick={() => goToCardsScreen(history)}>
            Ir para tela de Cards
          </button>
          <button onClick={() => goToFormsScreen(history)}>
            Ir para tela de Formulários
          </button>
        </Content>
      </Container>
    </>
  );
};

export default Header;

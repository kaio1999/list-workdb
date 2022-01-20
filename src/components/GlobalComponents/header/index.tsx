import React from "react";
import Container, { BtnLink, DivIcon } from "./style";

const Header = () => {

  return (
    <Container>
      <DivIcon>
        <img src="../assets/list-icon.png" alt="icon-list" />
        <h1>Listagem</h1>
      </DivIcon>
      <BtnLink onClick={() => (window.location.href = "/")}>
        Cadastrar
      </BtnLink>
      <BtnLink onClick={() => (window.location.href = "/userlist")}>
        Lista de inscritos
      </BtnLink>
    </Container>
  );
};

export default Header;

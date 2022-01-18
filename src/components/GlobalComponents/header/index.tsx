import React from "react";
import Container, { BtnLink, DivBtn } from "./style";

const Header = () => { 

  return (
    <Container>
      <h1>Listagem</h1>     
      <DivBtn>
        <BtnLink onClick={() => (window.location.href = "/")}>
          Cadastrar
        </BtnLink>
        <BtnLink onClick={() => (window.location.href = "/userlist")}>
          Lista de inscritos
        </BtnLink>
      </DivBtn>
    </Container>
  );
};

export default Header;

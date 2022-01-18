import React from "react";
import RoutesConfig from './routes'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <RoutesConfig />
      </div>
    </>
  );
}


export default HomePage;
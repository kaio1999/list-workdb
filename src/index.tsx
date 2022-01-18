import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Routes, Route, Router } from 'react-router-dom'
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("//d3ugyf2ht6aenh.cloudfront.net/stores/907/461/themes/style/img-921897232-1593637304-6a903f782b4a7fb1f27a0e82d27905c41593637305.jpg?904456423");
    overflow: hidden;
  }
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

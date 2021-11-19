import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Cadastro from "./components/cadastro/cadastro.component";
import Clientes from "./components/clientes/clientes.component";
import EditarCadastro from "./components/editarCadastro/editarCadastro.component";
import CheckIn from "./components/checkIn/checkIn.component";
import Homepage from "./components/homepage/homepage.component";
import CheckOut from "./components/checkOut/checkOut.component";
import Faturamento from "./components/faturamento/faturamento.component";

import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/editar/:id" component={EditarCadastro} />
        <Route path="/checkin" component={CheckIn} />
        <Route path="/checkout/:id" component={CheckOut} />
        <Route path="/faturamento" component={Faturamento} />
      </Switch>
      <Footer />
    </div>
  );
}

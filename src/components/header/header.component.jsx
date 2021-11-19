import React from "react";
import TracoLogo from "../../assets/traco-logo-branco.png";
import { Link } from "react-router-dom";

import * as S from "./header.styles";

const Header = () => {
  return (
    <S.Container>
      <Link to="/">
        <S.ImgContainer src={TracoLogo} alt="logo" />
      </Link>
      <S.LinkContainer>
        <S.LinkItem to="/cadastro">Cadastro</S.LinkItem>
        <S.LinkItem to="/checkin">Checkin</S.LinkItem>
        <S.LinkItem to="/clientes">Clientes</S.LinkItem>
        <S.LinkItem to="/faturamento">Faturamento</S.LinkItem>
      </S.LinkContainer>
    </S.Container>
  );
};

export default Header;

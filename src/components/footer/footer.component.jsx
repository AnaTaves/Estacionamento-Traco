import React from "react";

import Tegra from "../../assets/tegra-logo.png";
import Traco from "../../assets/traco-logo.png";

import * as S from "./footer.styles";

const Footer = () => {
  return (
    <S.Container>
      <S.FooterColumn>
        <S.LogoContainer>
          <S.Img src={Traco} alt="traco-logo" />
          <p>Para dúvidas e informações</p>
          <a href="traco.dev.br"> traco.dev.br</a>
        </S.LogoContainer>
        <S.LogoContainer>
          <S.Img src={Tegra} alt="tegra-logo" />
          <p>Saiba mais sobre a Tegra</p>
          <a href="www.tegra.com.br"> www.tegra.com.br</a>
        </S.LogoContainer>
      </S.FooterColumn>
      <S.FooterCopyRight>
        <p>Todos os direitos reservados a Traco</p>
        <p>Copyright © 2021</p>
        <p>
          Feito por: <a href="https://github.com/AnaTaves">Ana Cláudia</a>
        </p>
      </S.FooterCopyRight>
    </S.Container>
  );
};

export default Footer;

import React from "react";

import * as S from "./homepage.styles";

import Principal from "../../assets/traco-principal.png";

const Homepage = () => {
  return (
    <>
      <S.HomepageContainer src={Principal} alt="traco-principal" />
    </>
  );
};

export default Homepage;

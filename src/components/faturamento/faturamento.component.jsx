import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./faturamento.styles";

export const Faturamento = () => {
  const [totalFaturamento, setTotalFaturamento] = useState([]);

  useEffect(() => {
    const getFaturamento = async () => {
      const res = await axios.get(
        "https://estacionamento-traco.herokuapp.com/api/activities"
      );
      const response = res.data;
      const filteredPrice = response.filter((client) => client.price !== null);
      filteredPrice.forEach((item) => {
        setTotalFaturamento((item.price += item.price));
      });
    };
    getFaturamento();
  }, []);
  return (
    <S.Container>
      <h1>Faturamento do Dia</h1>
      <S.TotalContainer>
        R$:
        <input
          type="text"
          name="faturamento"
          value={totalFaturamento}
          disabled
        />
      </S.TotalContainer>
    </S.Container>
  );
};

export default Faturamento;

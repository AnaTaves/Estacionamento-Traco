import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./checkout.styles";

const CheckOut = () => {
  const [id, setID] = useState(0);
  const [nome, setNome] = useState("");
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");
  const [totalHoras, setTotalHoras] = useState([]);
  const [totalPagar, setTotalPagar] = useState(0);

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setNome(localStorage.getItem("nome"));
    setModelo(localStorage.getItem("modelo"));
    setPlaca(localStorage.getItem("placa"));
  }, []);

  useEffect(() => {
    const getActivities = async () => {
      await axios
        .get(`https://estacionamento-traco.herokuapp.com/api/activities`)
        .then((res) => {
          const clients = res.data;

          clients.forEach((client) => {
            if (client.vehicle_id == id) {
              calculatePrice(client.checkin_at);
            }
          });
        });
    };
    getActivities();
  }, [id]);

  const calculatePrice = (checkIn) => {
    const valorHora = 2;
    const valorMinuto = valorHora / 60;
    const newCheckIn = new Date(checkIn);
    const checkout = new Date();
    const tempo = newCheckIn - checkout;
    const total = calculaHora(Math.abs(tempo));
    setTotalHoras(total);
    const totalApagar = (
      (total.minutos + total.horas * 60) *
      valorMinuto
    ).toFixed(2);
    setTotalPagar(totalApagar);
  };

  const calculaHora = (tempoMil) => {
    const tempo = {
      horas: +(tempoMil / 3600000).toFixed(0),
      minutos: +((tempoMil / 60000) % 60).toFixed(0)
    };
    return tempo;
  };

  const checkoutClient = (label, price) => {
    const putCheckout = async () => {
      try {
        await axios
          .put(
            `https://estacionamento-traco.herokuapp.com/api/activities/checkout`,
            {
              label,
              price
            }
          )
          .then(() => {
            alert(`Cliente ${label} saiu do estacionamento`);
          });
      } catch (err) {
        console.log(err);
      }
    };
    putCheckout();
  };

  return (
    <S.Container>
      <S.Title>Checkout</S.Title>
      <S.Table>
        <tbody>
          <tr>
            <S.HeaderContainer>Cliente</S.HeaderContainer>
            <S.HeaderContainer>Modelo</S.HeaderContainer>
            <S.HeaderContainer>Placa</S.HeaderContainer>
          </tr>
          <tr>
            <td>{nome}</td>
            <td>{modelo}</td>
            <td>{placa}</td>
          </tr>
        </tbody>
      </S.Table>
      <S.TimeContainer>
        <h4>Total Horas:</h4>
        <p>
          {totalHoras.horas} horas : {totalHoras.minutos} min
        </p>
      </S.TimeContainer>
      <S.TotalContainer>
        <h4>Total a Pagar:</h4>
        <input
          type="text"
          name="totalpagar"
          value={`R$ ${totalPagar}`}
          disabled
        />
      </S.TotalContainer>
      <S.Button onClick={() => checkoutClient(placa, totalPagar)}>
        Finalizar
      </S.Button>
    </S.Container>
  );
};

export default CheckOut;

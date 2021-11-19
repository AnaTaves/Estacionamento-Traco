import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import * as S from "./checkIn.styles";

const CheckIn = () => {
  const [clientes, setClientes] = useState([]);
  const [getClients, setGetClients] = useState([]);
  const [listClients, setListClients] = useState([]);
  const [checkInClients, setCheckInClients] = useState([]);
  const [option, setOption] = useState("");

  //This useEffect gets the data of all the clients on the database and displays their labels for check in
  useEffect(() => {
    const fetchClients = async () => {
      await axios
        .get(`https://estacionamento-traco.herokuapp.com/api/vehicles`)
        .then((res) => {
          const clients = res.data;
          setGetClients(clients);
        });
    };
    fetchClients();
  }, []);

  //This useEffect gets the data of the clients that are already checked-in and exhibits a list of them
  useEffect(() => {
    let isMounted = true;
    const fetchCheckInClients = async () => {
      await axios
        .get(`https://estacionamento-traco.herokuapp.com/api/activities`)
        .then((res) => {
          const response = res.data;

          //checks if any of the clients are already checked out
          const filteredClients = response.filter(
            (client) => client.checkout_at === null
          );

          setCheckInClients(filteredClients);

          const setClientList = () => {
            const clientList = getClients.filter((item1) =>
              checkInClients.find((item2) => item1.id === item2.vehicle_id)
            );
            setListClients(clientList);
          };
          setClientList();
        });
    };
    if (isMounted) {
      fetchCheckInClients();
    }

    return () => {
      isMounted = false;
    };
  }, [clientes, getClients, checkInClients]);

  const checkOutClient = (data) => {
    let { id, owner, model, label } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("nome", owner);
    localStorage.setItem("modelo", model);
    localStorage.setItem("placa", label);
  };

  //This function adds the client on the check in
  const handleChange = (e) => {
    let obj = JSON.parse(e.target.value);
    setOption(obj);
  };

  const addClient = async () => {
    try {
      const user = await axios.post(
        "https://estacionamento-traco.herokuapp.com/api/activities/checkin",
        option
      );
      const response = user.data;
      setClientes(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.CheckInContainer>
      <h3>Lista de Clientes no Estacionamento</h3>
      <table>
        <tbody>
          <S.RowContainer>
            <S.HeaderContainer>Modelo</S.HeaderContainer>
            <S.HeaderContainer>Placa</S.HeaderContainer>
            <S.HeaderContainer>Opção</S.HeaderContainer>
          </S.RowContainer>
          {listClients.map((item) => (
            <S.RowContainer key={item.id}>
              <S.ItemContainer>{item.model}</S.ItemContainer>
              <S.ItemContainer>{item.label}</S.ItemContainer>
              <S.ItemContainer>
                <Link to={`/checkout/${item.id}`}>
                  <S.Button onClick={() => checkOutClient(item)}>
                    Checkout
                  </S.Button>
                </Link>
              </S.ItemContainer>
            </S.RowContainer>
          ))}
        </tbody>
      </table>
      <S.InsertCheckIn>
        <select onChange={handleChange}>
          <option value=""></option>
          {getClients.map((item) => (
            <option value={JSON.stringify(item)} key={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        <S.Button onClick={() => addClient()}>Checkin</S.Button>
        <S.LinkContainer to="/cadastro">Adicionar Novo</S.LinkContainer>
      </S.InsertCheckIn>
    </S.CheckInContainer>
  );
};

export default CheckIn;

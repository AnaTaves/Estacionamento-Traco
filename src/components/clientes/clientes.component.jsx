import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Bin from "../../assets/bin.png";
import Edit from "../../assets/edit.png";

import * as S from "./clientes.styles";

const Clientes = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    const getVehicles = async () => {
      await axios
        .get(`https://estacionamento-traco.herokuapp.com/api/vehicles`)
        .then((res) => {
          const clients = res.data;
          setGetData(clients);
        });
    };
    getVehicles();
  }, []);

  const deleteClient = async (id) => {
    try {
      const newList = getData.filter((client) => {
        return client.id !== id;
      });

      setGetData(newList);

      await axios
        .delete(`https://estacionamento-traco.herokuapp.com/api/vehicles/${id}`)
        .then(() => {
          alert(`Cliente ${id} deletado com sucesso!`);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const editData = (data) => {
    const { id, owner, model, type, label, observation } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("owner", owner);
    localStorage.setItem("model", model);
    localStorage.setItem("type", type);
    localStorage.setItem("label", label);
    localStorage.setItem("observation", observation);
  };

  return (
    <S.ListContainer>
      <h1>Lista de Clientes</h1>
      <S.TableContainer>
        <tbody>
          <tr>
            <th>Cliente</th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Tipo</th>
            <th>Observações</th>
            <th>Novo</th>
          </tr>
          {getData.map((item) => (
            <S.TableRow key={item.id}>
              <S.TableItem>{item.owner}</S.TableItem>
              <S.TableItem>{item.model}</S.TableItem>
              <S.TableItem>{item.label}</S.TableItem>
              <S.TableItem>{item.type}</S.TableItem>
              <S.TableItem>{item.observation}</S.TableItem>
              <S.TableItem>
                <S.IconContainer>
                  <Link to={`/editar/${item.id}`}>
                    <img
                      src={Edit}
                      alt="editar"
                      onClick={() => editData(item)}
                    />
                  </Link>
                  <img
                    src={Bin}
                    alt="lixeira"
                    onClick={() => deleteClient(item.id)}
                  />
                </S.IconContainer>
              </S.TableItem>
            </S.TableRow>
          ))}
        </tbody>
      </S.TableContainer>
    </S.ListContainer>
  );
};

export default Clientes;

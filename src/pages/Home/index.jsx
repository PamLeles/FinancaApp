import React from "react";
import Header from "../../components/Header/index.jsx";
import Balance from "../../components/Balance/index.jsx";
import Moviments from "../../components/Movements/index.jsx";

import { Container, Title, List } from "./styles.js";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "15/08/2023",
    type: 0, //despesas
  },
  {
    id: 2,
    label: "Pix cliente x",
    value: "2.500,00",
    date: "07/09/2023",
    type: 1, //entradas
  },
  {
    id: 3,
    label: "Salário",
    value: "7.500,00",
    date: "05/09/2023",
    type: 1, //despesas
  },
];

const Home = () => {
  return (
    <Container>
      <Header name="Ambrósio" />
      <Balance saldo="9.250,90" gastos="-527,00" />
      <Title> Ultimas Movimentações </Title>
      <List
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </Container>
  );
};

export default Home;

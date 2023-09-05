import React from "react";
import Header from "../../components/Header/index.jsx";
import Balance from "../../components/Balance/index.jsx";

import { ViewSpace, TextSpace } from "./styles.js";

const Home = () => {
  return (
    <ViewSpace>
      <Header name="Ambrósio" />
      <Balance saldo="9.250,90" gastos="-527,00" />
    </ViewSpace>
  );
};

export default Home;

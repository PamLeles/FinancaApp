import React from "react";
import Header from "../../components/Header/index.jsx";

import { ViewSpace, TextSpace } from "./styles.js";

const Home = () => {
  return (
    <ViewSpace>
      <Header name="Ambrósio" />
      <TextSpace>Página Home</TextSpace>
    </ViewSpace>
  );
};

export default Home;

import React from "react";

import { Feather } from "@expo/vector-icons";

import { Container, Contents, UserName, ButtonUser } from "./styles";

const Header = ({ name }) => {
  return (
    <Container>
      <Contents>
        <UserName> Olá, {name}</UserName>

        <ButtonUser activeOpacity={0.9}>
          <Feather name="user" size={27} color="#FFF" />
        </ButtonUser>
      </Contents>
    </Container>
  );
};

export default Header;

import React from "react";

import {
  Container,
  Item,
  ItemTitle,
  Content,
  CurrencySymbol,
  Balances,
  Expenses,
} from "./styles";

const Balance = ({ saldo, gastos }) => {
  return (
    <Container>
      <Item>
        <ItemTitle> Saldo</ItemTitle>
        <Content>
          <CurrencySymbol>R$</CurrencySymbol>
          <Balances>{saldo}</Balances>
        </Content>
      </Item>

      <Item>
        <ItemTitle> Gastos</ItemTitle>
        <Content>
          <CurrencySymbol>R$</CurrencySymbol>
          <Expenses>{gastos}</Expenses>
        </Content>
      </Item>
    </Container>
  );
};

export default Balance;

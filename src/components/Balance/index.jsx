import React from "react";
import { StyleSheet } from "react-native";

import { MotiView } from "moti";

import {
  Item,
  ItemTitle,
  Content,
  CurrencySymbol,
  Balances,
  Expenses,
} from "./styles";

const Balance = ({ saldo, gastos }) => {
  return (
    <MotiView
      style={styles.container}
      from={{
        rotateX: "-100deg",
        opacity: 0,
      }}
      animate={{
        rotateX: "-0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        delay: 300,
        duration: 900,
      }}
    >
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
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: -24,
    marginLeft: 14,
    marginRight: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
});

export default Balance;

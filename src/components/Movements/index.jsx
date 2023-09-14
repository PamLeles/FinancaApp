import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { MotiView, AnimatePresence, MotiText } from "moti";

import { Container, Date, Content, Label } from "./styles";

const Movements = ({ data }) => {
  const [showValue, setShowValue] = useState(false);
  return (
    <Container onPress={() => setShowValue(!showValue)}>
      <Date>{data.date}</Date>
      <Content>
        <Label>{data.label} </Label>
        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <MotiText
              style={data.type === 1 ? styles.value : styles.expenses}
              from={{
                translateX: 100,
              }}
              animate={{
                translateX: 0,
              }}
              transition={{
                type: "timing",
                durantion: 500,
              }}
            >
              {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <MotiView
              style={styles.skeleton}
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "timing",
              }}
            ></MotiView>
          </AnimatePresence>
        )}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2ecc71",
  },
  expenses: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e74c3c",
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#DADADA",
    borderRadius: 9,
  },
});
export default Movements;

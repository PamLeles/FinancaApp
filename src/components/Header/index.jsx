import React from "react";
import { StyleSheet, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import { MotiView, MotiText } from "moti";

import { Container, ButtonUser } from "./styles";

const Header = ({ name }) => {
  return (
    <Container>
      <MotiView
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 800,
          delay: 300,
        }}
      >
        <MotiText
          style={styles.username}
          from={{
            translateX: -300,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: "timing",
            duration: 800,
            delay: 800,
          }}
        >
          Olá, {name}
        </MotiText>

        <ButtonUser activeOpacity={0.9}>
          <Feather name="user" size={27} color="#FFF" />
        </ButtonUser>
      </MotiView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Header;

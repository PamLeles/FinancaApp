import { Container, Title } from "./styles.js";

import { StyleSheet } from "react-native";

import { MotiText } from "moti";

const Loading = () => {
  return (
    <Container>
      <MotiText
        style={styles.title}
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
          delay: 500,
          duration: 1000,
        }}
      >
        {" "}
        Finanças{" "}
      </MotiText>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
});

export default Loading;

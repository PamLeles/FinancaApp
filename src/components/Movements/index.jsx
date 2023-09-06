import React, { useState } from "react";

import {
  Container,
  Date,
  Content,
  Label,
  Value,
  Expenses,
  Skeleton,
} from "./styles";
import { View } from "react-native";

const Movements = ({ data }) => {
  const [showValue, setShowValue] = useState(false);
  return (
    <Container onPress={() => setShowValue(!showValue)}>
      <Date>{data.date}</Date>
      <Content>
        <Label>{data.label} </Label>
        {showValue ? (
          data.type === 1 ? (
            <Value>
              {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
            </Value>
          ) : (
            <Expenses>
              {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
            </Expenses>
          )
        ) : (
          <Skeleton></Skeleton>
        )}
      </Content>
    </Container>
  );
};
export default Movements;

import React from "react";

import { Container, Date, Content, Label, Value, Expenses } from "./styles";

const Movements = ({ data }) => {
  return (
    <Container>
      <Date>{data.date}</Date>
      <Content>
        <Label>{data.label} </Label>
        {data.type === 1 ? (
          <Value>
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
          </Value>
        ) : (
          <Expenses>
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
          </Expenses>
        )}
      </Content>
    </Container>
  );
};
export default Movements;

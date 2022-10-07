import React from "react";
import HighlightCard from "../../components/HighlightCard";
import TransactionCard from "../../components/TransactionCard";


import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title
} from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/20133000?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Edinelson</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards 
        
      >
        <HighlightCard 
          title="Entradas" 
          amount="R$ 17.400,00" 
          lastTransaction="Última Entrada dia 13 de outubro"
          type="up"
        />
        <HighlightCard 
          title="Saídas" 
          amount="R$ 10.200,00" 
          lastTransaction="Última Entrada dia 03 de outubro"
          type="down"
        />
        <HighlightCard 
          title="Saldo" 
          amount="R$ 5.200,00" 
          lastTransaction="Última Entrada dia 04 de outubro"
          type="total"
        />
      </HighlightCards>
      <Transactions>
        <Title>
          Listagem
        </Title>
        <TransactionCard/>
      </Transactions>
    </Container>
  );
}

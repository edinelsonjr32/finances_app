import React from "react";
import HighlightCard from "../../components/HighlightCard";
import {TransactionCard, TransactionCardProps} from "../../components/TransactionCard";
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
  Title,
  TransactionsList,
} from "./styles";
export interface DataListProps extends TransactionCardProps {
  id: string;
}
export default function Dashboard() {
  const data  = [
    {
      id:'1',
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "2500.00",
      category: {
        name: "vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2017",
    },
    {
      id:'2',
      type: "negative",
      title: "Hamburguer",
      amount: "2500.00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "13/04/2017",
    },
    {
      id:'3',
      type: "negative",
      title: "Aluguel Casa",
      amount: "500.00",
      category: {
        name: "Aluguel",
        icon: "shopping-bag",
      },
      date: "13/04/2017",
    },
    {
      id:'4',
      type: "positive",
      title: "Salário",
      amount: "5000.00",
      category: {
        name: "Salário",
        icon: "dollar-sign",
      },
      date: "13/04/2017",
    },
    {
      id:'5',
      type: "negative",
      title: "Notebook",
      amount: "8500.00",
      category: {
        name: "vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2017",
    },
  ];
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
      <HighlightCards>
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
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={item => item.id }
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}

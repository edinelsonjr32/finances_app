
import React from 'react';
import { 
    Container ,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
} from './styles';

export default function TransactionCard() {
  return (
    <Container>
        <Title>
            Desenvolvimento de software
        </Title>
        <Amount>
            R$ 1200.00
        </Amount>
        <Footer>
            <Category>
                <Icon name="dollar-sign"/>
                <CategoryName>
                    Vendas
                </CategoryName>
            </Category>
            <Date>
                13/04/2020
            </Date>
        </Footer>
    </Container>
  )
}
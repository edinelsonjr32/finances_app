import React from "react";
import { Container, Header, Title, Form , Fields, TransactionsTypes} from "./styles";
import { useState } from "react";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TranscactionTypeButton";
import {CategorySelectButton} from '../../components/Forms/CategorySelectButton';

import {Modal} from "react-native";
import {CategorySelect} from "../CategorySelect";
export default function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [category, setCategory] = useState(
    {
      key: 'category',
      name: 'Categoria'
    }
  );
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  function handleTransactionsTypeSelect(type: 'up' | 'down'){
    setTransactionType(type)
  }
  function handleCloseSelectCategory(){
    setCategoryModalOpen(false)
  }
  function handleOpenSelectCategory(){
    setCategoryModalOpen(true)
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionsTypes>
            <TransactionTypeButton 
              type="up"
              title="Income"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>
          <CategorySelectButton
            title="Categoria"
            onPress={handleOpenSelectCategory}
          />
          
        </Fields>
        <Button title="Enviar"/>
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </Container>
  );
}

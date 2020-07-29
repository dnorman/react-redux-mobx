import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OrderForm } from './OrderForm';
import { OrdersList } from './OrdersList';


function App() {
  return (
    <>
      <OrdersList />
      <OrderForm />
    </>
  );
}

export default App;

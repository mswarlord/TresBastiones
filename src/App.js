import React from 'react';
import './App.css';
import BootstrapNavBar from './Componentes/BoostrapNavBar';
import { Header } from './Componentes/Header';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemList from './Componentes/ItemList/ItemList';

function App() {
  return (
    <div className='App'>
      <Header title='Tres Bastiones' subtitle='Tu universo 3D' />
      <BootstrapNavBar />     
      <h2>MAS VENDIDOS</h2>  
      <div className='ItemListContainer'>
        <ItemList producto='Riel Picatinny' initial='0' stock='5' />
        <ItemList producto='Chasis Auto Arduino' initial='0' stock='3' />
        <ItemList producto='Agarradera Beretta FS92' initial='0' stock='10' />
        <ItemList producto='Maceta Baby Groot' initial='0' stock='1' />
        <ItemList producto='Pokebola' initial='0' stock='1' />
      </ div>
      <h2>PREPEDIDOS</h2>
      <div className='ItemListContainer'>
        <ItemList producto='Riel Picatinny' initial='0' stock='10' />
        <ItemList producto='Chasis Auto Arduino' initial='0' stock='5' />
        <ItemList producto='Agarradera Beretta FS92' initial='0' stock='50' />
        <ItemList producto='Maceta Rostro Mujer' initial='0' stock='5' />
        <ItemList producto='Soporte Joystick' initial='0' stock='5' />
        <ItemList producto='Goku Ultra Instinto' initial='0' stock='1' />
        <ItemList producto='Pokebola' initial='0' stock='10' />
      </ div>
      
    </div>
  );
}

export default App;
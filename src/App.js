import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ShoppingItems from './container/ShopSection/ShopingItems';
import { Route } from 'react-router-dom';
import Cart from './container/ShoppingCart/ShoppingCart';
import Footer from './container/Footer/Footer';
import Header from './container/header/Header';

function App() {
  return (
    <div className="App">
      <Route path="/" component= {Navbar} />
      <Route path="/" exact component= {Header} />
      <Route path="/" exact component = {ShoppingItems} />
      <Route path="/cart" exact component = {Cart} />
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;

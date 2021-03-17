import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SelfIntroduction from './Components/SelfIntroduction/SelfIntroduction';
import Products from './Components/Products/Products';
import Menu from './Components/Menu/Menu';
import Space from './Components/Space/Space';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <SelfIntroduction />
      <Products />
      <Menu />
      <Space />
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import ProductsList from './ProductsList';
function App() {
  return (
    <>
      <h3 align="center">Welcome to React Applications</h3>
      <hr />
       <ProductsList /> 
       <ProductsList category="Laptops"/> 
      <ProductsList category="Mobiles"/> 
      <hr/> 
    </>
  );
}

export default App;

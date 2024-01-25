import React from 'react';
import { useState } from 'react';
import ProductDetails from './ProductDetails';

function ProductsList({category}) {

  const products = [
    { id: 1, name: 'Product 1', category: 'Mobiles' },
    { id: 2, name: 'Product 2', category: 'Mobiles' },
    { id: 3, name: 'Product 3', category: 'Laptops' },
    { id: 4, name: 'Product 4', category: 'Laptops' },
    { id: 5, name: 'Product 5', category: 'Television' },
    { id: 6, name: 'Product 6', category: '' },
  ];

  const [productArray, setSroductArray] = useState(products);

  const filterCatagory = category ? productArray.filter(item => item.category == category): productArray
  let resultArray = filterCatagory.map(item=>{
    return <ProductDetails key={item.id} prdObj={item}/>
  })
  return (
    <>
        {resultArray}
    </>
  );
}

export default ProductsList;



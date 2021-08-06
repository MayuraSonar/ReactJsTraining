import React, { Dispatch } from 'react';
import logo from './logo.svg';
import './App.css';
import { IProductProps } from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { ProductState } from './types';
import { addProduct, removeProduct } from './store/actionCreator';
import { AddProduct } from './AddProduct';
import {RemoveProduct} from './RemoveProduct';


const App:React.FC=()=> {
  
  const products: IProductProps[]=useSelector(
    (state:ProductState)=>state.products)
  
    const dispatch:Dispatch<any>=useDispatch();

    const saveProduct=React.useCallback(
      (product:IProductProps)=>dispatch(addProduct(product)),
      [dispatch]
  )
  return(
    <React.Fragment>
<AddProduct saveProduct={saveProduct}/>
{products.map((product:IProductProps)=>(
  <RemoveProduct key={product.id}
  product={product}
  removeProduct={removeProduct}
  ></RemoveProduct>
))}


    </React.Fragment>
  );
}

export default App;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { IProductProps } from './Products';
import { Props } from './types';
export const RemoveProduct:React.FC<Props>=({product,removeProduct})=>{
    const dispatch:Dispatch<any>=useDispatch()
    const deleteProduct=React.useCallback(
        (product:IProductProps)=>dispatch(removeProduct(product)),
        [dispatch,removeProduct]
    )
    return(
       <React.Fragment>
            <h3>{product.id}</h3>
            <h3>{product.productName}</h3>
            <h3>{product.description}</h3>
       
        <button onClick={()=>deleteProduct(product)}>Delete Product</button>
        </React.Fragment>
    )
}
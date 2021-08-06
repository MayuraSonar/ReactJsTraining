import { ProductAction, DispatchType } from '../types';
import { IProductProps } from '../Products';
import * as actionTypes from './actionTypes';

export function sendHttpRequest(action:ProductAction)
{
    return(dispatch:DispatchType)=>{
        dispatch(action);
    }
}

export function addProduct(product:IProductProps)
{
    const action:ProductAction={
        type:actionTypes.ADD_PRODUCT,product
    }

    return sendHttpRequest(action);
}

export function removeProduct(product:IProductProps)
{
    const action:ProductAction={
        type:actionTypes.REMOVE_PRODUCT,product
    }

    return sendHttpRequest(action);
}

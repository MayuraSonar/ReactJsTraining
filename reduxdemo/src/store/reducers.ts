import { ProductState, ProductAction } from '../types';
import * as actionTypes from './actionTypes';
import { IProductProps } from '../Products';

const intialState:ProductState={
   products:[
       {
           id:1,
           productName:"Product1",
           description:"Product1 id is 1"
       },

       {
        id:2,
        productName:"Product2",
        description:"Product1 id is 2"
       },

       {
        id:1,
        productName:"Product3",
        description:"Product1 id is 3"
       }
   ]
}


const reducer=(

    state:ProductState=intialState,
    action:ProductAction
):ProductState=>{
    switch(action.type)
    {
        case actionTypes.ADD_PRODUCT:
        const newProduct: IProductProps={
            id:action.product.id,
            productName:action.product.productName,
            description:action.product.description
        }

        return {
            ...state,
            products: state.products.concat(newProduct)
        }

        case actionTypes.REMOVE_PRODUCT:
            const updateProduct:IProductProps[]=state.products.filter(
                product=>product.id==action.product.id
            )

            return{
                ...state,
                products:updateProduct
            }
    }

    return state
}

export default reducer
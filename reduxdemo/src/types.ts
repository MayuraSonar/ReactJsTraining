import { IProductProps } from './Products';

export type ProductState={
    products:IProductProps[];
}

export type ProductAction={
    type:string;
    product:IProductProps;
}

export type DispatchType=(args: ProductAction) =>ProductAction;
export type ProductProps={
    saveProduct:(product:IProductProps | any)=>void

}

export type Props={
    product:IProductProps
    removeProduct:(product:IProductProps)=>void
}
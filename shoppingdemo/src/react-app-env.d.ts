/// <reference types="react-scripts" />
type ShoeData={
    name:string;
    price:string,
    category:string,
    description:string,
    images:string[];
}

type CartItem={
    id:string;
    name:string;
    price:number;
    category:string;
    image:string;
    quantity:number;
    includedInSum:boolean;

}

type shoesList=Record<string,ShoeData>
type Shoes={
    men: shoesList;
    women: shoesList;
    kids: shoesList;
    shoedById:shoesList;

}
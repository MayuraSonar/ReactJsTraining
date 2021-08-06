import * as React from "react";
import { ProductProps } from "./types";
import { IProductProps } from "./Products";

export const AddProduct: React.FC<ProductProps> = ({ saveProduct }) => {
  const [products, setProduct] = React.useState<IProductProps | {}>();
  const handleProductData = (e: React.FormEvent<HTMLInputElement>) => {
    setProduct({
      ...products,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addProduct = (e: React.FormEvent) => {
    e.preventDefault();
    saveProduct(products);
  };

  return (
    <div>
      <form onSubmit={addProduct} className="Add Product">
        <input
          type="text"
          id="id"
          placeholder="id"
          onChange={handleProductData}
        ></input>

        <input
          type="text"
          id="name"
          placeholder="name"
          onChange={handleProductData}
        ></input>
        <input
          type="text"
          id="description"
          placeholder="description"
          onChange={handleProductData}
        ></input>
        <button disabled={products == undefined ? true : false}>
          Add Product
        </button>
      </form>
    </div>
  );
};

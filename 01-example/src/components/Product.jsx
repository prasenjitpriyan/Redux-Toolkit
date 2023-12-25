import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // Dispatch an action for fetch Products
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const addToCart = (product) => {
    //Dispatch an add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="card w-96 glass" key={product.id}>
      <figure className="object-cover h-96 w-96">
        <img src={product.image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>INR: {product.price}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="flex flex-wrap justify-center mt-10 p-2 gap-4">
        {cards}
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const removeToCart = (id) => {
    // Dispatch a remove action
    dispatch(remove(id));
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
            className="btn btn-error"
            onClick={() => removeToCart(product.id)}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="flex flex-wrap justify-center mt-10 p-2 gap-4">
        {cards}
      </div>
    </div>
  );
};

export default Cart;

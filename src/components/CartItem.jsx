import React, { useContext } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
        ref={ref}
        onClick={() => removeFromCart(item.id)}
      ></i>

      <img src={item.url} width="130px" alt="" />
      <p>$2.99</p>
    </div>
  );
}

export default CartItem;

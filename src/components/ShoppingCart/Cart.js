import "/src/components/ShoppingCart/shopping.css";
import { useState } from "react";

export const Cart = () => {
  const [cart, setCart] = useState([]);

  const shop = [
    { item: "Apple", id: 0, quantity: 0 },
    { item: "Grape", id: 1, quantity: 0 },
    { item: "Melon", id: 2, quantity: 0 }
  ];

  function List() {
    console.log(cart);
    const addToCart = (product) => {
      let indexOfItem = cart.findIndex(
        (indexItem) => product.id === indexItem.id
      );

      if (indexOfItem >= 0) {
        let cartCurrent = [...cart];
        cartCurrent[indexOfItem].quantity += 1;
        setCart(cartCurrent);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };

    const removeFromCart = (product) => {
      let indexOfItem = cart.findIndex(
        (indexItem) => product.id === indexItem.id
      );

      if (indexOfItem >= 0) {
        let cartCurrent = [...cart];
        if (cartCurrent[indexOfItem].quantity > 1) {
          cartCurrent[indexOfItem].quantity -= 1;
          setCart(cartCurrent);
        } else {
          let cartRemoved = cartCurrent.filter(
            (item) => item !== cartCurrent[indexOfItem]
          );
          setCart(cartRemoved);
        }
      }
    };

    return (
      <div>
        {shop.map((product) => (
          <div className="flex">
            <li className="shop-items">
              {product.item}
              <button
               
                className="shop-button ctr padding"
                onClick={() => addToCart(product)}
              >
                {" "}
                Add to Cart{" "}
              </button>
            </li>
          </div>
        ))}
        <h1>Cart </h1>
        {cart.map((cartObj) => (
          <div className="flex">
            <li className="cart-items">
              {cartObj.item}
              <button
                className="cart-button ctr padding"
                onClick={() => addToCart(cartObj)}
              >
                {" "}
                +{" "}
              </button>
              {cartObj.quantity}
              <button
                className="cart-button ctr padding"
                onClick={() => removeFromCart(cartObj)}
              >
                {" "}
                -{" "}
              </button>
            </li>
           
          </div>
        ))}
         <br /> <br />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Shopping Cart</h1> <br />
      <List />
    </div>
  );
};

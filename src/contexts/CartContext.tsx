import { createContext, ReactNode, useReducer } from "react";
import { CartItem, cartReducer, CartState } from "../reducers/cart/reducer";
import { useNavigate } from "react-router-dom";
import { OrderInfo } from "../pages/Cart";

interface CartContextProps {
  addItemToCart: ({ id, quantity }: CartItem) => void;
  decrementItemQuantity: (itemId: string) => void;
  incrementItemQuantity: (itemId: string) => void;
  removeItemFromCart: (itemId: string) => void;
  checkout: (order: OrderInfo) => void;
  cart: CartState;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, {
    coffees: [],
    orders: [],
  });

  const navigate = useNavigate();

  function addItemToCart(item: CartItem) {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: {
        item,
      },
    });
  }

  function incrementItemQuantity(itemId: string) {
    dispatch({
      type: "INCREMENT_ITEM_QUANTITY",
      payload: {
        itemId,
      },
    });
  }

  function decrementItemQuantity(itemId: string) {
    dispatch({
      type: "DECREMENT_ITEM_QUANTITY",
      payload: {
        itemId,
      },
    });
  }

  function removeItemFromCart(itemId: string) {
    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      payload: {
        itemId,
      },
    });
  }

  function checkout(order: OrderInfo) {
    dispatch({
      type: "CHECKOUT_CART",
      payload: {
        order,
        callback: navigate,
      },
    });
  }

  return (
    <CartContext
      value={{
        addItemToCart,
        cart,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItemFromCart,
        checkout,
      }}
    >
      {children}
    </CartContext>
  );
}

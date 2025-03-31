import { createContext, ReactNode, useEffect, useReducer } from "react";
import { CartItem, cartReducer, CartState } from "../reducers/cart/reducer";
import { useNavigate } from "react-router-dom";
import { OrderInfo } from "../pages/Cart";
import {
  addItemToCartAction,
  checkOutAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemFromCartAction,
} from "../reducers/cart/actions";

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
  const [cart, dispatch] = useReducer(
    cartReducer,
    {
      coffees: [],
      orders: [],
    },
    (initialState) => {
      const stateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (stateAsJSON) {
        return JSON.parse(stateAsJSON);
      }

      return initialState;
    }
  );

  useEffect(() => {
    const stateAsJSON = JSON.stringify(cart);

    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateAsJSON);
  }, [cart]);

  const navigate = useNavigate();

  function addItemToCart(item: CartItem) {
    dispatch(addItemToCartAction(item));
  }

  function incrementItemQuantity(itemId: string) {
    dispatch(incrementItemQuantityAction(itemId));
  }

  function decrementItemQuantity(itemId: string) {
    dispatch(decrementItemQuantityAction(itemId));
  }

  function removeItemFromCart(itemId: string) {
    dispatch(removeItemFromCartAction(itemId));
  }

  function checkout(order: OrderInfo) {
    dispatch(checkOutAction(order, navigate));
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

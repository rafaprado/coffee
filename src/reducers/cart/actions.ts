import { NavigateFunction } from "react-router-dom";
import { OrderInfo } from "../../pages/Cart";
import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  CHECKOUT_CART = "CHECKOUT_CART",
}

export function addItemToCartAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  };
}

export function incrementItemQuantityAction(itemId: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  };
}

export function decrementItemQuantityAction(itemId: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  };
}

export function removeItemFromCartAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      itemId,
    },
  };
}

export function checkOutAction(order: OrderInfo, navigate: NavigateFunction) {
  return {
    type: "CHECKOUT_CART",
    payload: {
      order,
      callback: navigate,
    },
  };
}

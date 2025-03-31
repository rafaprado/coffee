import { produce } from "immer";
import { OrderInfo } from "../../pages/Cart";
import { ActionTypes } from "./actions";

export interface CartItem {
  id: string;
  quantity: number;
}

interface Order extends OrderInfo {
  id: string;
  items: CartItem[];
}

export interface CartState {
  coffees: CartItem[];
  orders: Order[];
}

//eslint-disable-next-line
type Action<T = any> = {
  type: string;
  payload?: T;
};

export function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        draft.coffees.push(action.payload.item);
      });

    case ActionTypes.INCREMENT_ITEM_QUANTITY: {
      const coffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.itemId
      );

      if (coffeeIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].quantity += 1;
      });
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const coffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.itemId
      );

      if (coffeeIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.coffees.splice(coffeeIndex, 1);
      });
    }

    case ActionTypes.DECREMENT_ITEM_QUANTITY: {
      const coffeeIndex = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.itemId
      );

      if (coffeeIndex < 0) {
        return state;
      }

      if (state.coffees[coffeeIndex].quantity > 1) {
        return produce(state, (draft) => {
          draft.coffees[coffeeIndex].quantity -= 1;
        });
      }

      return produce(state, (draft) => {
        draft.coffees.splice(coffeeIndex, 1);
      });
    }

    case ActionTypes.CHECKOUT_CART: {
      return produce(state, (draft) => {
        const newOrder = {
          id: String(new Date().getTime()),
          items: state.coffees,
          ...action.payload.order,
        };

        draft.orders.push(newOrder);
        draft.coffees = [];

        action.payload.callback(`/order/${newOrder.id}/success`);
      });
    }

    default:
      return state;
  }
}

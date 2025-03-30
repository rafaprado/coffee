import {
  AddToCartButton,
  CoffeeCardContainer,
  CoffeePricing,
  CoffeeTypeTag,
  Order,
} from "./styles";
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { QuantityInput } from "../Form/QuantityInput";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export interface Coffee {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
}

export function CoffeCard({ coffee }: Coffee) {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const { addItemToCart } = useContext(CartContext);

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity <= 1) return;
    setQuantity((state) => state - 1);
  }

  function handleAddItemToCart() {
    setIsItemAdded(true);
    setQuantity(1);
    addItemToCart({ id: coffee.id, quantity });
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />

      <header>
        <div>
          {coffee.tags.map((tag: string) => (
            <CoffeeTypeTag key={tag}>{tag}</CoffeeTypeTag>
          ))}
        </div>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </header>

      <footer>
        <CoffeePricing>
          R$
          <span>{coffee.price.toFixed(2)}</span>
        </CoffeePricing>

        <Order>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <AddToCartButton
            $isAdded={isItemAdded}
            onClick={handleAddItemToCart}
            disabled={isItemAdded}
          >
            {!isItemAdded ? (
              <ShoppingCart weight="fill" />
            ) : (
              <CheckFat weight="fill" />
            )}
          </AddToCartButton>
        </Order>
      </footer>
    </CoffeeCardContainer>
  );
}

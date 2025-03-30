import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityInputContainer } from "./styles";

type QuantityInputProps = {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
};

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button onClick={decrementQuantity} type="button">
        <Minus size={14} weight={"bold"} />
      </button>

      <input type="number" value={quantity} placeholder="0" readOnly />

      <button onClick={incrementQuantity} type="button">
        <Plus size={14} weight={"bold"} />
      </button>
    </QuantityInputContainer>
  );
}

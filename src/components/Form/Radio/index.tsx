import { InputHTMLAttributes } from "react";
import { RadioContainer } from "./styles";

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  isChecked?: boolean;
};

export function Radio({ isChecked, children, id, ...rest }: RadioProps) {
  return (
    <RadioContainer htmlFor={id}>
      <input type="radio" id={id} checked={isChecked} {...rest} />
      {children}
    </RadioContainer>
  );
}

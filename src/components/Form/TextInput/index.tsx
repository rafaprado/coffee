import { InputHTMLAttributes } from "react";
import { TextInputContainer, Box, ErrorMessage } from "./styled";
import { FieldError } from "react-hook-form";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  error?: FieldError;
};

export function TextInput({ optional, error, ...rest }: TextInputProps) {
  return (
    <Box>
      <TextInputContainer>
        <input type="text" {...rest} />

        {optional ? <span>Opcional</span> : null}
      </TextInputContainer>

      {error && <ErrorMessage role="alert">{error.message}</ErrorMessage>}
    </Box>
  );
}

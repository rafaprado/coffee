import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TextInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  border-radius: 4px;

  background: ${(props) => props.theme.colors["gray-200"]};

  font-size: ${(props) => props.theme.typography["text-S"]};
  color: ${(props) => props.theme.colors["gray-500"]};

  padding-inline: 0.75rem;

  &:has(input:focus) {
    box-shadow: 0 0 2px ${(props) => props.theme.colors["yellow-600"]};
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    flex: 1;

    padding-block: 0.75rem;
    min-width: 0;

    color: ${(props) => props.theme.colors["gray-600"]};

    &::placeholder {
      color: ${(props) => props.theme.colors["gray-500"]};
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:read-only {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }

  span {
    font-style: italic;
    font-size: ${(props) => props.theme.typography["text-XS"]};
  }
`;

export const ErrorMessage = styled.p`
  font-size: ${(props) => props.theme.typography["text-XS"]};
  font-weight: 400;
  color: red;
`;

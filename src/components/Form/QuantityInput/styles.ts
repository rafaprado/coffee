import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  display: inline-flex;

  background: ${(props) => props.theme.colors["gray-300"]};
  border-radius: 6px;
  overflow: hidden;

  input {
    width: 100%;
    border: none;
    background: transparent;

    text-align: center;

    color: ${(props) => props.theme.colors["gray-800"]};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;

    padding: 0.5rem;

    cursor: pointer;

    color: ${(props) => props.theme.colors["purple-400"]};
    background: ${(props) => props.theme.colors["gray-300"]};

    > svg {
      pointer-events: none;
    }
  }
`;

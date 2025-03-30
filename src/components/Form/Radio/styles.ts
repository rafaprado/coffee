import styled from "styled-components";

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;

  border: 2px solid transparent;

  flex: 1;

  padding: 1rem;
  background: ${(props) => props.theme.colors["gray-300"]};

  border-radius: 4px;

  cursor: pointer;

  font-size: ${(props) => props.theme.typography["button-M"]};
  color: ${(props) => props.theme.colors["gray-600"]};
  text-transform: uppercase;

  svg {
    color: ${(props) => props.theme.colors["purple-400"]};
    margin-right: 0.75rem;
  }

  input {
    width: 0;
    visibility: hidden;
    z-index: -1;
  }

  &:has(> input:checked) {
    border-color: ${(props) => props.theme.colors["purple-400"]};
    background: ${(props) => props.theme.colors["purple-200"]};
  }
`;

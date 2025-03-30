import styled from "styled-components";

export const CoffeeCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  flex-basis: content;

  align-items: center;

  min-width: 0;

  padding: 1.25rem 1.5rem;
  background-color: ${(props) => props.theme.colors["gray-100"]};

  border-radius: 6px 36px 6px 36px;

  img {
    max-width: 120px;
    max-height: 120px;

    margin-top: -40px;
    margin-bottom: 12px;
  }

  h3 {
    font-size: ${(props) => props.theme.typography["title-S"]};
    color: ${(props) => props.theme.colors["gray-700"]};
  }

  header {
    margin-bottom: 2.125rem;

    > div {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.25rem;
    }
  }

  header p {
    color: ${(props) => props.theme.colors["gray-500"]};
    font-size: ${(props) => props.theme.typography["text-S"]};
  }

  footer {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

    width: 100%;
  }
`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CoffeeTypeTag = styled.span`
  font-size: ${(props) => props.theme.typography.tag};
  color: ${(props) => props.theme.colors["yellow-600"]};
  font-weight: bold;
  text-transform: uppercase;

  background-color: ${(props) => props.theme.colors["yellow-200"]};

  border-radius: 100px;

  padding: 0.25rem 0.5rem;
`;

export const CoffeePricing = styled.div`
  display: inline-block;
  vertical-align: top;

  color: ${(props) => props.theme.colors["gray-600"]};

  font-size: ${(props) => props.theme.typography["text-S"]};

  span {
    margin-left: 0.25rem;
    font-family: "Baloo 2", sans-serif;
    font-weight: bold;
    font-size: ${(props) => props.theme.typography["title-M"]};
  }
`;

export const AddToCartButton = styled.button<{ $isAdded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  background: ${({ theme, $isAdded }) =>
    !$isAdded ? theme.colors["purple-400"] : theme.colors["yellow-400"]};
  color: ${(props) => props.theme.colors.white};

  border: none;
  border-radius: 6px;

  cursor: pointer;

  > svg {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

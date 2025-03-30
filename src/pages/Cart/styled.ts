import styled from "styled-components";

export const CartContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 448px;
  column-gap: 2rem;

  max-width: calc(1120px + 4rem);
  padding: 0 2rem 2rem 2rem;

  margin: 0 auto;

  article {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: ${(props) => props.theme.typography["title-XS"]};
    color: ${(props) => props.theme.colors["gray-700"]};
    margin-bottom: 1rem;
  }
`;

export const CheckoutOrderAddressContainer = styled.div`
  background: ${(props) => props.theme.colors["gray-100"]};
  padding: 2.5rem;
  border-radius: 6px;

  margin-bottom: 0.75rem;

  .header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme.colors["yellow-600"]};
    }

    p {
      font-size: ${(props) => props.theme.typography["text-M"]};
      color: ${(props) => props.theme.colors["gray-700"]};
    }

    span {
      font-size: ${(props) => props.theme.typography["text-S"]};
      color: ${(props) => props.theme.colors["gray-600"]};
    }
  }

  fieldset {
    border: none;
    display: grid;
    grid-template-columns: 1fr 1fr 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;

    & > div:nth-child(1) {
      grid-column: 1/2;
    }

    & > div:nth-child(2) {
      grid-column: 1/4;
    }

    & > div:nth-child(3) {
      grid-column: 1/2;
    }

    & > div:nth-child(4) {
      grid-column: span 2;
    }
  }
`;

export const CheckoutPaymentMethodCard = styled.div`
  background: ${(props) => props.theme.colors["gray-100"]};
  padding: 2.5rem;
  border-radius: 6px;

  .header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme.colors["purple-400"]};
    }

    p {
      font-size: ${(props) => props.theme.typography["text-M"]};
      color: ${(props) => props.theme.colors["gray-700"]};
    }

    span {
      font-size: ${(props) => props.theme.typography["text-S"]};
      color: ${(props) => props.theme.colors["gray-600"]};
    }
  }

  fieldset {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
  }
`;

export const FinishOrderCard = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.colors["gray-100"]};

  border-radius: 6px 44px 6px 44px;
`;

export const Coffee = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;

  width: 100%;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme.colors["gray-300"]};

  &:not(:nth-child(1)) {
    padding-top: 1.5rem;
  }

  > div {
    display: flex;
    align-items: flex-start;

    gap: 1.25rem;

    flex: 1;

    img {
      height: 64px;
      width: 64px;
    }

    > div {
      display: flex;
      flex-direction: column;

      gap: 0.5rem;

      align-items: flex-start;

      span {
        font-size: ${(props) => props.theme.typography["text-M"]};
        color: ${(props) => props.theme.colors["gray-700"]};
      }
    }
  }

  aside {
    font-size: ${(props) => props.theme.typography["text-M"]};
    color: ${(props) => props.theme.colors["gray-600"]};
    font-weight: bold;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;
    background: ${(props) => props.theme.colors["gray-300"]};

    border-radius: 6px;
    border: none;

    font-size: ${(props) => props.theme.typography["button-M"]};
    color: ${(props) => props.theme.colors["gray-600"]};

    text-transform: uppercase;

    cursor: pointer;

    svg {
      pointer-events: none;
      color: ${(props) => props.theme.colors["purple-400"]};
    }
  }
`;

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  color: ${(props) => props.theme.colors["gray-600"]};

  padding-block: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-child(3) {
      font-size: ${(props) => props.theme.typography["text-L"]};
      color: ${(props) => props.theme.colors["gray-700"]};
      font-weight: bold;
    }
  }
`;

export const ConfirmOrderButton = styled.button`
  display: block;
  width: 100%;

  font-size: ${(props) => props.theme.typography["button-G"]};
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  line-height: 1.6;

  background: ${(props) => props.theme.colors["yellow-400"]};
  border: 0;
  padding: 0.75rem;

  border-radius: 6px;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  max-width: 600px;
  margin: 0 auto;

  h1 {
    color: ${(props) => props.theme.colors["yellow-400"]};
  }

  p {
    color: ${(props) => props.theme.colors["gray-600"]};
  }

  img {
    width: 450px;
    height: 450px;
  }
`;

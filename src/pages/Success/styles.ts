import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: calc(1120px + 4rem);
  padding: 0 2rem;
  margin: 5rem auto 0 auto;

  > div {
    h1 {
      font-size: ${(props) => props.theme.typography["title-L"]};
      color: ${(props) => props.theme.colors["yellow-600"]};
    }

    p {
      font-size: ${(props) => props.theme.typography["text-L"]};
      color: ${(props) => props.theme.colors["gray-700"]};
    }
  }
`;

export const OrderInfoContainer = styled.div`
  border-color: transparent;
  background-origin: border-box;
  width: 100%;

  border-radius: 6px 36px;

  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors["yellow-400"]}, ${theme.colors["purple-400"]})`};
`;

export const OrderInfo = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;
  border-radius: 6px 36px;

  background: ${({ theme }) => theme.colors.white};

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 999px;
      color: ${(props) => props.theme.colors.white};
    }

    div {
      display: flex;
      flex-direction: column;

      color: ${(props) => props.theme.colors["gray-600"]};
    }
  }

  > div + div {
    margin-top: 2rem;
  }
`;

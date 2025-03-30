import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem;

  nav {
    max-width: 1120px;
    margin: 0 auto;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    list-style: none;

    > li {
      display: flex;
      align-items: center;
    }
  }
`;

const BaseButton = styled(NavLink)`
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 4px;

  border-radius: 6px;

  padding: 0.5rem;
`;

export const LocationButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors["purple-200"]};

  svg {
    color: ${(props) => props.theme.colors["purple-400"]};
  }

  span {
    color: ${(props) => props.theme.colors["purple-600"]};
  }
`;

export const CartButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors["yellow-200"]};
  position: relative;

  span {
    position: absolute;
    top: -10px;
    right: -10px;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    font-size: ${(props) => props.theme.typography["text-XS"]};
    font-weight: bold;
    line-height: 1;
    color: ${(props) => props.theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.colors["yellow-600"]};
  }

  svg {
    color: ${(props) => props.theme.colors["yellow-600"]};
  }
`;

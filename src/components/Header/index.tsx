import { CartButton, HeaderContainer, LocationButton } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <ul>
          <li>
            <LocationButton to="#">
              <MapPin size={22} weight="fill" />
              {cart.orders[0] ? (
                <span>
                  {cart.orders[cart.orders.length - 1].cidade},{" "}
                  {cart.orders[cart.orders.length - 1].uf}
                </span>
              ) : (
                <span>Location, State</span>
              )}
            </LocationButton>
          </li>

          <li>
            <CartButton to="/cart">
              <ShoppingCart size={22} weight="fill" />
              {cart.coffees.length > 0 ? (
                <span>{cart.coffees.length}</span>
              ) : null}
            </CartButton>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

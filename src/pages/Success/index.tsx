import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { OrderInfo, OrderInfoContainer, SuccessContainer } from "./styles";
import deliveryMan from "../../assets/delivery-man.svg";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useParams } from "react-router-dom";

export function Success() {
  const theme = useTheme();
  const { cart } = useContext(CartContext);

  const { order_id: orderId } = useParams();

  const orderData = cart.orders.find((item) => orderId === item.id);

  const paymentMethod = {
    credito: "Cartão de crédito",
    debito: "Cartão de débito",
    dinheiro: "Dinheiro",
  };

  if (!orderData) {
    return null;
  }

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderInfoContainer>
          <OrderInfo>
            <div>
              <MapPin
                weight="fill"
                size={32}
                style={{ backgroundColor: theme.colors["purple-400"] }}
              />

              <div>
                <span>
                  Entrega em rua <></>
                  <strong>
                    {orderData.rua}, {orderData.numero}
                  </strong>
                </span>

                <span>
                  {orderData.cidade} - {orderData.estado}, {orderData.uf}
                </span>
              </div>
            </div>

            <div>
              <Timer
                weight="fill"
                size={32}
                style={{ backgroundColor: theme.colors["yellow-400"] }}
              />

              <div>
                <span>Previsão de entrega </span>
                <span>
                  <strong>20 min - 30 min </strong>
                </span>
              </div>
            </div>

            <div>
              <CurrencyDollar
                size={32}
                style={{ backgroundColor: theme.colors["yellow-600"] }}
              />

              <div>
                <span>Pagamento na entrega</span>
                <span>
                  <strong>
                    {
                      paymentMethod[
                        orderData[
                          "payment-method"
                        ] as keyof typeof paymentMethod
                      ]
                    }
                  </strong>
                </span>
              </div>
            </div>
          </OrderInfo>
        </OrderInfoContainer>
      </div>

      <img src={deliveryMan} alt="" />
    </SuccessContainer>
  );
}

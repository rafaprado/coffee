import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";
import {
  CartContainer,
  CartTotalInfo,
  CheckoutOrderAddressContainer,
  CheckoutPaymentMethodCard,
  Coffee,
  CoffeeInfo,
  EmptyCartContainer,
  FinishOrderCard,
} from "./styled";
import emptyCartImage from "../../assets/empty-cart.svg";
import { Radio } from "../../components/Form/Radio";
import { TextInput } from "../../components/Form/TextInput";
import { QuantityInput } from "../../components/Form/QuantityInput";
import { FocusEvent, useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { coffees } from "../../mock/coffees-data.json";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { ConfirmOrderButton } from "./Components/ConfirmOrderButton";

const createOrderValidationSchema = z.object({
  cep: z.string().regex(/^\d{5}-?\d{3}$/, "Informe um CEP válido."),
  rua: z.string(),
  numero: z.string().max(8, "Informe um número válido."),
  complemento: z.string().optional(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string(),
  estado: z.string(),
  "payment-method": z.string(),
});

export type OrderInfo = z.infer<typeof createOrderValidationSchema>;

export function Cart() {
  const {
    cart,
    decrementItemQuantity,
    incrementItemQuantity,
    removeItemFromCart,
    checkout,
  } = useContext(CartContext);

  const {
    register,
    clearErrors,
    handleSubmit,
    setValue,
    setError,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createOrderValidationSchema),
  });

  const [cep, setCep] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (cep === null) return;

    async function requestCEP() {
      try {
        const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await request.json();

        setValue("cep", data.cep);
        setValue("cidade", data.localidade);
        setValue("uf", data.uf);
        setValue("estado", data.estado);
        clearErrors("cep");

        setCep(cep);
      } catch {
        setError("cep", { message: "Cep inválido." });
        resetField("cidade");
        resetField("uf");
      }
    }

    requestCEP();
  }, [cep, clearErrors, setError, setValue, resetField]);

  useEffect(() => {
    let timeOut: number;

    if (cart.coffees.length < 1) {
      timeOut = setTimeout(() => {
        return navigate("/");
      }, 3000);
    }

    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [cart, navigate]);

  const coffeesInCartData = cart.coffees.map((cartItem) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === cartItem.id);

    if (!coffeeInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...coffeeInfo,
      quantity: cartItem.quantity,
    };
  });

  const shippingPrice = 3.5;

  const totalItemsPrice = coffeesInCartData.reduce(
    (prev, crr) => (prev += crr.quantity * crr.price),
    0
  );

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleDeleteItem(itemId: string) {
    removeItemFromCart(itemId);
  }

  function handleCreateNewOrder(checkoutData: OrderInfo) {
    console.log("Here");
    checkout(checkoutData);
  }

  function onBlurCepInput(event: FocusEvent<HTMLInputElement>) {
    const newCep = event.target.value;

    if (newCep === cep) return;

    if (newCep.trim().length === 0) {
      setValue("cidade", "");
      setValue("uf", "");

      return;
    }

    setCep(event.target.value);
  }

  return cart.coffees.length > 0 ? (
    <CartContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      <article>
        <h2>Complete seu pedido</h2>

        <CheckoutOrderAddressContainer>
          <div className="header">
            <MapPinLine size={22} />

            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <fieldset>
            <TextInput
              placeholder="CEP"
              id="cep"
              {...register("cep", { onBlur: onBlurCepInput })}
              error={errors.cep}
              autoFocus={false}
            />
            <TextInput placeholder="Rua" id="rua" {...register("rua")} />
            <TextInput
              placeholder="Número"
              id="numero"
              {...register("numero")}
              error={errors.rua}
            />
            <TextInput
              placeholder="Complemento"
              id="complemento"
              optional
              {...register("complemento")}
              error={errors.complemento}
            />
            <TextInput
              placeholder="Bairro"
              id="bairro"
              {...register("bairro")}
              error={errors.bairro}
            />
            <TextInput
              placeholder="Cidade"
              id="cidade"
              {...register("cidade")}
              readOnly
              error={errors.cidade}
            />
            <TextInput placeholder="UF" id="uf" readOnly {...register("uf")} />

            <TextInput
              placeholder="state"
              id="state"
              readOnly
              {...register("uf")}
              type="hidden"
            />
          </fieldset>
        </CheckoutOrderAddressContainer>

        <CheckoutPaymentMethodCard>
          <div className="header">
            <CurrencyDollar size={22} />

            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>

          <fieldset>
            <Radio id="credito" {...register("payment-method")} value="credito">
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </Radio>

            <Radio id="debito" {...register("payment-method")} value="debito">
              <Bank size={16} />
              <span>Cartão de débito</span>
            </Radio>

            <Radio
              id="dinheiro"
              {...register("payment-method")}
              value="dinheiro"
            >
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
          </fieldset>
        </CheckoutPaymentMethodCard>
      </article>

      <aside>
        <h2>Cafés selecionados</h2>

        <FinishOrderCard>
          <div>
            {coffeesInCartData.map((coffee) => (
              <Coffee key={coffee.id}>
                <div>
                  <img src={coffee.image} alt="" />

                  <div>
                    <span>{coffee.title}</span>

                    <CoffeeInfo>
                      <QuantityInput
                        quantity={coffee.quantity}
                        decrementQuantity={() => handleItemDecrement(coffee.id)}
                        incrementQuantity={() => {
                          handleItemIncrement(coffee.id);
                        }}
                      />
                      <button
                        onClick={() => handleDeleteItem(coffee.id)}
                        type="button"
                      >
                        <Trash size={16} />
                        Remover
                      </button>
                    </CoffeeInfo>
                  </div>
                </div>

                <aside>{(coffee.price * coffee.quantity).toFixed(2)}</aside>
              </Coffee>
            ))}
          </div>

          <CartTotalInfo>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(totalItemsPrice)}
              </span>
            </div>

            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(shippingPrice)}
              </span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat("pt-br", {
                  currency: "BRL",
                  style: "currency",
                }).format(totalItemsPrice + shippingPrice)}
              </span>
            </div>
          </CartTotalInfo>

          <ConfirmOrderButton disabled={!!errors}>
            <span>Confirmar Compra</span>
          </ConfirmOrderButton>
        </FinishOrderCard>
      </aside>
    </CartContainer>
  ) : (
    <EmptyCartContainer>
      <header>
        <h1>Parece que seu carrinho está vazio.</h1>
        <p>
          Estamos redirecionando você ao inicio para poder adicionar itens à sua
          compra...
        </p>
      </header>

      <img src={emptyCartImage} alt="" />
    </EmptyCartContainer>
  );
}

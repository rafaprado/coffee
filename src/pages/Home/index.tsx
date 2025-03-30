import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Hero, HeroListIcon, HomeContainer } from "./styles";
import coffeeHeroSectionImg from "../../assets/coffee-hero-section.png";
import { CoffeCard } from "../../components/CoffeeCard";
import { coffees } from "../../mock/coffees-data.json";

export function Home() {
  return (
    <>
      <Hero>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul>
              <li>
                <HeroListIcon background="yellow-dark">
                  <ShoppingCart size={16} weight="fill" />
                </HeroListIcon>

                <span>Compra simples e segura</span>
              </li>

              <li>
                <HeroListIcon>
                  <Package size={16} weight="fill" />
                </HeroListIcon>

                <span>Compra simples e segura</span>
              </li>

              <li>
                <HeroListIcon background="yellow">
                  <Timer size={16} weight="fill" />
                </HeroListIcon>

                <span>Compra simples e segura</span>
              </li>

              <li>
                <HeroListIcon background="purple">
                  <Coffee size={16} weight="fill" />
                </HeroListIcon>

                <span>Compra simples e segura</span>
              </li>
            </ul>
          </div>

          <img src={coffeeHeroSectionImg} alt="" />
        </div>
      </Hero>

      <HomeContainer>
        <section>
          <h2>Nossos cafés</h2>

          <div>
            {coffees.map((coffee) => (
              <CoffeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </section>
      </HomeContainer>
    </>
  );
}

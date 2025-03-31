import styled from "styled-components";
import heroBackground from "../../assets/hero-background.svg";

const HERO_LIST_ICON_COLORS = {
  yellow: "yellow-400",
  "yellow-dark": "yellow-600",
  purple: "purple-400",
  gray: "gray-600",
};

interface HeroListIconProps {
  background?: keyof typeof HERO_LIST_ICON_COLORS;
}

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${heroBackground});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem;
  height: 544px;

  > div {
    display: flex;
    gap: 3.5rem;

    max-width: 1120px;
    margin: 0 auto;
  }

  h1 {
    font-size: ${(props) => props.theme.typography["title-XL"]};
    color: ${(props) => props.theme.colors["gray-800"]};

    font-weight: bold;
  }

  p {
    color: ${(props) => props.theme.colors["gray-700"]};
    font-size: ${(props) => props.theme.typography["text-L"]};
  }

  ul {
    display: grid;
    grid-template-columns: max-content 1fr;
    list-style: none;

    margin-top: 66px;
    column-gap: 40px;
    row-gap: 20px;

    > li {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      span {
        font-size: ${(props) => props.theme.typography["text-M"]};
        color: ${(props) => props.theme.colors["gray-600"]};
      }
    }
  }
`;

export const HeroListIcon = styled.div<HeroListIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.background
      ? props.theme.colors[
          HERO_LIST_ICON_COLORS[
            props.background
          ] as keyof typeof props.theme.colors
        ]
      : props.theme.colors["gray-600"]};
`;

export const HomeContainer = styled.main`
  max-width: calc(1120px + 4rem);
  margin: 0 auto;
  padding: 2rem;

  h2 {
    font-size: ${(props) => props.theme.typography["title-L"]};
    color: ${(props) => props.theme.colors["gray-700"]};
  }

  > section {
    padding: 0;

    h2 {
      margin-bottom: 3.25rem;
    }

    > div {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 2.5rem;
      grid-column-gap: 2rem;
    }
  }
`;

import { ButtonHTMLAttributes, MouseEvent, ReactNode, useState } from "react";
import { ConfirmOrderButtonContainer, ProgressBackground } from "./styled";

export function ConfirmOrderButton({
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const [loading, setLoading] = useState(false);
  const [loadPercentage, setLoadPercentage] = useState(0);

  function onClickConfirmOrder(event: MouseEvent<HTMLButtonElement>) {
    setLoading(true);
    setLoadPercentage(0);

    const interval = setInterval(() => {
      return setLoadPercentage((prevState) => {
        if (prevState >= 100) {
          setLoading(false);
          clearInterval(interval);
          (event.target as HTMLButtonElement).form?.requestSubmit();

          return 100;
        }

        return prevState + 1;
      });
    }, 30);
  }

  const buttonLoadingStatusText = (children: ReactNode) => {
    if (!loading && loadPercentage === 0) {
      return children;
    }

    if (loadPercentage >= 100) {
      return <span> Sucesso...</span>;
    } else {
      return <span>Enviando dados...</span>;
    }
  };

  return (
    <ConfirmOrderButtonContainer
      disabled={loading || loadPercentage >= 100}
      type="button"
      onClick={onClickConfirmOrder}
    >
      <ProgressBackground $progress={loadPercentage} />
      {buttonLoadingStatusText(children)}
    </ConfirmOrderButtonContainer>
  );
}

import styled from "styled-components";

export const ConfirmOrderButtonContainer = styled.button`
  position: relative;

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
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors["yellow-600"]};
  }

  > span {
    position: relative;
    z-index: 1;
  }
`;

export const ProgressBackground = styled.div<{ $progress: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => `${props.$progress}%`};
  height: 100%;
  background-color: ${(props) =>
    props.$progress < 100 ? props.theme.colors["yellow-600"] : "#2CDB75"};
  transition: "width 0.3s ease-in-out";

  border-radius: inherit;
`;

import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  min-width: 7.5rem;
  width: 100%;
  height: 1.56rem;
  padding: 0.125rem 0.75rem;

  color: #fff;
  border-radius: 1.5rem;
  border: none;

  background-color: #565656;
  position: relative;

  cursor: pointer;

  &:hover {
    /* opacity: 0.8; */
    filter: brightness(1.25);
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 10rem;
      height: 2rem;

      background: #e4105d;

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -0.3125rem;
        left: -0.375rem;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 1.375rem;
      }
    `}
`;

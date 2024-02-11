import styled from "styled-components";

export const LoadingSpinner = styled.span`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.color.boulder};
  border-radius: 50%;
  margin-left: 10px;
  animation: rotation 1s linear infinite;
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-bottom-color: ${({ theme }) => theme.color.olivine};
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

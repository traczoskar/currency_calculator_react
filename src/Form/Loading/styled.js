import styled from "styled-components";

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.alabaster};
  box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 30px;
  animation: fadeInFadeOut 1.5s infinite;

  @keyframes fadeInFadeOut {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const LoadingText = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.color.mineshaft};
  text-shadow: 1px 3px 10px rgba(0, 0, 0, 0.135);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingAnimation = styled.div`
  animation: zoomInZoomOut 1.5s infinite;

  @keyframes zoomInZoomOut {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
`;

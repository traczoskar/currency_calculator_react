import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  font-size: 18px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.silver};
  border-radius: 2px;
  padding: 20px;
  width: 100%;
  text-align: center;
  box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.1);
`;

export const SourceAmount = styled.p`
  color: ${({ theme }) => theme.color.emperor};
  font-size: 17px;
  text-shadow: 1px 3px 20px rgba(0, 0, 0, 0.135);
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ResultInfo = styled.p`
  color: ${({ theme }) => theme.color.gray};
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-shadow: 1px 3px 20px rgba(0, 0, 0, 0.135);
`;

export const TargetAmount = styled.strong`
  color: ${({ theme }) => theme.color.mineshaft};
  font-size: 34px;
  margin-top: 5px;
  margin-bottom: 10px;
  text-shadow: 1px 3px 10px rgba(0, 0, 0, 0.135);
  animation: zoomInZoomOut 2s infinite;

  @keyframes zoomInZoomOut {
    0% {
      color: ${({ theme }) => theme.color.mineshaft};
      transform: scale(1);
    }
    50% {
      color: ${({ theme }) => theme.color.boulder};
      transform: scale(1.02);
    }
    100% {
      color: ${({ theme }) => theme.color.mineshaft};
      transform: scale(1);
    }
  }
`;

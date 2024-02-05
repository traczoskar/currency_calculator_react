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
  padding: 5px;
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
  margin-top: 0px;
  margin-bottom: 10px;
  text-shadow: 1px 3px 10px rgba(0, 0, 0, 0.135);
`;

export const Flag = styled.img`
  width: 58px;
  height: 58px;
  margin-top: 0px;
  margin-bottom: 20px;
  filter: drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.25));
  animation: subtleWavePulse 3s linear infinite;

  @keyframes subtleWavePulse {
    0%,
    100% {
      transform: rotate(0deg) scale(1);
    }

    33% {
      transform: rotate(-5deg) scale(1.05);
    }

    66% {
      transform: rotate(5deg) scale(1.1);
    }
  }
`;

import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 100px auto;
  background-color: ${({ theme }) => theme.color.alabaster};
  padding: 25px;
  border: 1px solid ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  box-shadow: 2px 3px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 5px auto;
  }
`;

export const HeaderLogo = styled.img`
  align-self: center;
  width: 85px;
  height: 85px;
  margin-top: 20px;
  margin-bottom: 20px;
  filter: drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.15));
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const Legend = styled.legend`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  padding: 20px 20px;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.135);
  border-bottom: 2px solid ${({ theme }) => theme.color.silver};
`;

export const ErrorInfo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.color.mineshaft};
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.135);
  animation: fadeInfadeOut 2s infinite;

  @keyframes fadeInfadeOut {
    0% {
      color: ${({ theme }) => theme.color.mineshaft};
      opacity: 0;
    }
    50% {
      color: ${({ theme }) => theme.color.tamarillo};
      opacity: 1;
    }
    100% {
      color: ${({ theme }) => theme.color.mineshaft};
      opacity: 0;
    }
  }
`;

export const ErrorSubInfo = styled(ErrorInfo)`
  color: ${({ theme }) => theme.color.boulder};
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 14px;
  animation: none;
`;

export const Label = styled.label`
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 2fr;
  font-weight: 400;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const InputName = styled.span`
  color: ${({ theme }) => theme.color.emperor};
  font-weight: 600;
  font-size: 15px;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.135);
`;

export const InputWindow = styled.input`
  font-size: 15px;
  max-width: 500px;
  width: 100%;
  padding: 13px;
  border: 1px solid ${({ theme }) => theme.color.darksilver};
  background-color: ${({ theme }) => theme.color.mercury};
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: ${({ theme }) => theme.color.mineshaft};
  cursor: pointer;
`;

export const RatesDate = styled.p`
  padding: 5px;
  text-align: center;
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.mineshaft};
`;

export const CalculateIcon = styled.img`
  width: 19px;
  height: 19px;
  margin-right: 8px;
  transition: 1s;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.silver};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.mercury};
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.135);
  padding: 10px 10px;
  color: ${({ theme }) => theme.color.mineshaft};
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 25px;
  cursor: pointer;
  transition: 0.75s;

  &:hover {
    background-color: ${({ theme }) => theme.color.olivine};
    transform: scale(1.03);
    ${CalculateIcon} {
      transform: rotate(360deg) scale(1.2);
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.color.boulder};
  }
`;

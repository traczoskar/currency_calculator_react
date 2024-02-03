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

  @media (max-width: 767px) {
    margin: 10px 5px;
  }
`;

export const HeaderLogo = styled.img`
  align-self: center;
  width: 85px;
  height: 85px;
  margin-top: 20px;
  margin-bottom: 20px;
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
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.135);
  border-bottom: 2px solid ${({ theme }) => theme.color.silver};
`;

export const Label = styled.label`
  display: grid;
  gap: 15px;
  grid-template-columns: auto 1fr;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 15px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const InputName = styled.span`
  color: #555;
  font-weight: 600;
  font-size: 15px;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.135);
`;

export const InputWindow = styled.input`
  font-size: 15px;
  width: 100%;
  padding: 15px;
  border: 1px solid #bbb;
  background-color: #e8e8e8;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #333;
  cursor: pointer;
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
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #e2e2e2;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.135);
  padding: 10px 10px;
  color: #222;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 25px;
  cursor: pointer;
  transition: 0.75s;

  &:hover {
    background-color: hsl(89, 42%, 62%);
    color: #333;
    transform: scale(1.03);
    ${CalculateIcon} {
      transform: rotate(360deg) scale(1.2);
    }
  }

  &:active {
    background-color: hsl(60, 1%, 30%);
    color: #333;
  }
`;

import styled from "styled-components";

export const ClockContainer = styled.p`
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
  font-size: 10px;
  font-family: "Courier New", Courier, monospace;
  color: ${({ theme }) => theme.color.mineshaft};
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.135);
  padding: 2px 0 10px 0;
`;

export const ClockPrompt = styled.strong`
  color: ${({ theme }) => theme.color.boulder};
`;

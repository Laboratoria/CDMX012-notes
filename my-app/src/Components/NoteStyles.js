import styled from "styled-components";

export const Div = styled.div`
  position: relative;

  display: flex;
  width: 100%;
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  padding: 0.5%;
`;
export const Form = styled.form`
  display: flex;
  position: relative;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  background-size: auto;
  font-family: Roboto;
  text-align: center;
  padding: 20px;
`;
export const Div2 = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;
  background-size: auto;
  font-family: Roboto;
  text-align: center;
  padding: 20px;
`;

export const Input = styled.input`
  position: relative;

  text-align: center;
  with: 20%;
  length: 20%;
`;

export const Input2 = styled.input`
  text-align: center;
  with: 20%;
  length: 20%;
`;

export const ButtonExp = styled.button`
  position: abosolute;
  color: black;
  height: 20px;
  display: block;
  background: transparent;
  border: none !important;
  font-size: 50px;
  display: inline-block;
`;

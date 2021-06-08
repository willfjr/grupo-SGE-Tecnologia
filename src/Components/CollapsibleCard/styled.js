import styled from "styled-components";

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 5px;

  button {
    background-color: #8a398f;
    color: #fff;
    cursor: pointer;
    margin-top: 5px;
    padding: 15px;
    width: 40%;
    border: none;
    text-align: center;
    font-size: 16px;
    transition: 0.4s;
    border-radius: 20px;
    :hover {
      background-color: #b813c2;
    }
  }

  div {
    padding: 15px;
    margin-left: 50px;
    width: 30%;
    border: none;
    border-radius: 0px 0px 20px 20px;
    align-self: inherit;
    border-top: none;
    text-align: center;
    outline: none;
    font-size: 16px;
    transition: 0.4s;
    background-color: #b813c2;
    color: #fff;
  }
`;

export const Container = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

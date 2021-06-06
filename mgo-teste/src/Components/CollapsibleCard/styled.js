import styled from "styled-components";

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 5px;

  button {
    background-color: #76d3f5;
    color: #444;
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
      background-color: #5fddde;
    }
  }

  div {
    padding: 15px;
    margin-left: 50px;
    width: 30%;
    border: 1px solid #5f9bde;
    border-radius: 0px 0px 20px 20px;
    align-self: inherit;
    border-top: none;
    text-align: center;
    outline: none;
    font-size: 16px;
    transition: 0.4s;
    background-color: #5f9bde;
  }
`;

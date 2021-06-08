import styled from "styled-components";

export const Container = styled.div`
  background: #6101f5;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: #b813c2;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

import styled from "styled-components";

export const StyledInfo = styled.div`
  & > span {
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    margin: 10px;
  }

  .descricao {
    background: var(--white);
    margin: 5px 0;
    border: 1px solid #333;
    position: absolute;
    width: 100%;
    max-width: 300px;
    padding: 10px;
    overflow: hidden;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--white);
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

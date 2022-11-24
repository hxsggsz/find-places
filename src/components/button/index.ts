import styled from "styled-components";

export const StyledButton = styled.button`
  right: 0;
  color: #fff;
  width: 40px;
  bottom: 5px;
  z-index: 999;
  height: 40px;
  margin: 15px;
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  background: var(--blue);
  border: 0.5px solid #111112;
`;

export const StyledSubmit = styled.button`
  width: 100%;
  height: 40px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  background: var(--dark-blue);
  color: #fff;
  border: 0.5px solid #111112;
  box-shadow: 2px 5px 2px 1px rgba(0, 0, 0, 0.2);
  &:focus {
    background: var(--white);
    color: #111112;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

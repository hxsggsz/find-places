import styled from "styled-components";

export const StyledEye = styled.button`
  top: 0;
  right: 0;
  z-index: 999;
  display: flex;
  margin: 15px;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  color: #333;
  border-radius: 10px;

  &:hover {
    background: var(--dark-blue);
    color: var(--white);
  }
`;

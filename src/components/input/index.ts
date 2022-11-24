import styled from "styled-components";

export const StyledInputRoot = styled.div`
  margin: 10px 0;
`;

export const StyledInputContent = styled.input`
  width: 100%;
  height: 35px;
  margin: 5px;
  padding-left: 10px;
  color: var(--dark-blue);
  border-radius: 4px;
  font-weight: bold;
  background: var(--white);
  border: 2px solid var(--grey);
`;

export const StyledLabel = styled.label`
  color: var(--white);
  margin: 15px;
  font-size: 14px;
  font-weight: 600;
`;

export const StyledError = styled.span`
  color: var(--dark-blue);
  margin: 10px;
  font-weight: 700;

  font-size: 1.2rem;
`;

import styled from "styled-components";

export const StyledRoot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledContainer = styled.div`
  border-radius: 8px;
  max-width: 50rem;
  padding: 10px;
  background: #fff;
  z-index: 999;
`;

export const StyledTitle = styled.div`
  display: flex;
  padding-bottom: 10px;
  justify-content: space-between;
  color: #4f4f4f;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

export const StyledIcon = styled.div`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    color: #111112;
  }
`;

export const StyledBody = styled.div`
  text-align: justify;
  padding: 20px;
  h1 {
    text-align: center;
  }
  p {
    font-size: 1.8rem;
    text-indent: 50px;
    font-weight: 500;
  }
`;

import styled from "styled-components";

export const StyledRoot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(
    0,
    0,
    0,
    0.5
    ); /* está assim ao invez do var(--grey) para deixar o fundo visivel ainda */
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    leaflet-popup-content-wrapper {
      background: inherit;
    }
`;

export const StyledContainer = styled.div`
  border-radius: 8px;
  max-width: 40rem;
  padding: 10px;
  background: #207ac9;
  z-index: 999;
`;

export const StyledTitle = styled.div`
  display: flex;
  padding-bottom: 10px;
  justify-content: space-between;
  color: #fff;
  align-items: center;
  border-bottom: 1px solid var(--dark-blue);
  z-index: 999;
`;

export const StyledIcon = styled.button`
  cursor: pointer;
  color: var(--white);
  background: none;
  border: none;
  &:hover {
    color: var(--grey);
  }
`;

export const StyledBody = styled.div`
  text-align: justify;
  color: var(--white);
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

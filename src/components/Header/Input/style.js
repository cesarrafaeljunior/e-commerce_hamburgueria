import styled from "styled-components";

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  input {
    width: 100%;
    height: 100%;

    padding: 0 10px 0 15px;

    border-radius: 8px;
    border: 2px solid var(--gray20);

    background-color: var(--white);

    font-size: var(--fontSize16);

    &::placeholder {
      color: var(--gray20);
    }
    &:focus {
      outline: none;
      border: solid 2px var(--gray100);
    }
  }

  button {
    position: absolute;
    top: 0.5rem;
    right: 0.8rem;
  }
`;

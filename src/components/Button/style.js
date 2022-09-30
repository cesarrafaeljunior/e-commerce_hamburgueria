import styled from "styled-components";

export const StyledButton = styled.button`
  height: 40px;

  padding: 0 20px;

  background-color: var(--colorPrimary);
  color: var(--white);

  border: 2px solid var(--colorPrimary);
  border-radius: 8px;

  font-size: var(--fontSize14);

  &:hover {
    background-color: var(--colorPrimary50);

    border: solid 2px var(--colorPrimary50);
  }
`;

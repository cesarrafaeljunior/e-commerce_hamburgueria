import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px;

  background-color: var(--gray0);
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  @media (min-width: 768px) {
    div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media (min-width: 1000px) {
    padding: 8px;
  }
`;

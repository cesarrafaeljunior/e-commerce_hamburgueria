import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  margin: 0 -15px 0 -15px;

  padding-left: 1rem;

  overflow: auto;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1000px) {
    justify-content: flex-start;
  }
`;

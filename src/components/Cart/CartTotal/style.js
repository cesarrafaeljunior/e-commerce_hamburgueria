import styled from "styled-components";

export const StyledTotalValue = styled.section`
  display: flex;
  flex-direction: column;
  gap: 22px;

  margin-top: -30px;
  padding: 20px;

  background-color: var(--gray0);
  border-top: 2px solid var(--gray50);
  div {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-size: var(--fontSize16);
    font-weight: 600;
    color: var(--gray100);
  }
  p {
    font-weight: var(--fontWeiSemiBold);
    font-size: var(--fontSize16);
    color: var(--gray50);
  }
  button {
    height: 60px;

    background-color: var(--gray20);
    border: solid 2px var(--gray20);

    color: var(--gray50);

    font-weight: 600;
    font-size: var(--fontSize16);

    &:hover {
      background-color: var(--gray50);
      border: solid 2px var(--gray50);

      color: var(--gray20);
    }
  }
`;

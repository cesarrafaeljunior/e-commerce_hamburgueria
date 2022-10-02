import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h2 {
    font-size: var(--fontSize22);
    color: var(--gray100);
  }
  p {
    font-size: var(--fontSize16);
    font-weight: var(--fontWeiSemiBold);
    color: var(--gray50);
  }
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

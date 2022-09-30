import styled from "styled-components";

export const StyledEmptyCart = styled.div`
  width: 100%;
  height: 223px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  margin: 0 15px 0 0;

  h2 {
    font-size: var(--fontSize18);
    color: var(--gray100);
  }
  p {
    font-size: var(--fontSize14);
    color: var(--gray50);
  }
`;

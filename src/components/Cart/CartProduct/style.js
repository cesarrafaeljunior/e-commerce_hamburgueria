import styled from "styled-components";

export const StyledProductsCart = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 90%;
  height: 100%;

  margin: 0 auto;
  figure {
    display: flex;
    align-items: center;
    width: 70px;
    height: 100%;
  }

  img {
    background-color: var(--gray20);
    width: 100%;
    height: 70px;
  }

  div {
    width: 39%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    p {
      font-size: var(--fontSize12);
      font-weight: var(--fontWeiRegular);
      color: var(--gray50);
      margin-top: 5px;
    }
  }

  h2 {
    font-size: var(--fontSize14);
    color: var(--gray100);
  }

  .btnRemover {
    font-size: var(--fontSize12);
    font-weight: var(--fontWeiSemiBold);

    color: var(--gray50);

    margin: 15px 5px 0 0;

    align-self: flex-start;

    cursor: pointer;
    &:hover {
      color: var(--colorSecundary);
      text-decoration: underline;
    }
  }
`;

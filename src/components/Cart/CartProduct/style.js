import styled from "styled-components";

export const StyledProductsCart = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 100%;

  margin: 0 auto;
  animation: cardAnimation 0.3s forwards;
  figure {
    display: flex;
    align-items: center;
    width: 70px;
    height: 100%;
    background-color: var(--gray0);
  }

  img {
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

  @keyframes cardAnimation {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

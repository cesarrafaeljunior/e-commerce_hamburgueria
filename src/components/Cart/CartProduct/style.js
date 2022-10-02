import styled from "styled-components";

export const StyledProductsCart = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 100%;

  margin: 0 auto;
  animation: ${({ animationName }) =>
      animationName == "entrada" ? "entrada" : "saida"}
    0.4s;
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

  .Box__Name {
    width: 39%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    h2 {
      font-size: var(--fontSize14);
      color: var(--gray100);
    }
    p {
      font-size: var(--fontSize12);
      font-weight: var(--fontWeiRegular);
      color: var(--gray50);
      margin-top: 5px;
    }
  }
  .Box__Qtd {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      font-size: var(--fontSize12);
      font-weight: var(--fontWeiBold);
      color: var(--gray50);
      margin-top: 5px;
    }
    p ~ p {
      font-size: var(--fontSize14);
      font-weight: var(--fontWeiBold);
    }
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
  @keyframes entrada {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes saida {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

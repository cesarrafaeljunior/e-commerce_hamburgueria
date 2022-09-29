import styled from "styled-components";

export const StyledProducts = styled.li`
  min-width: 15rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-bottom: 20px;

  border: solid 1px var(--gray20);
  border-radius: 8px;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 150px;

    background-color: var(--gray0);
  }

  img {
    width: 177px;
    height: 177px;
  }
  h2 {
    font-size: var(--fontSize18);

    color: var(--gray100);

    padding-left: 20px;
    margin-top: 20px;
  }
  p {
    font-size: var(--fontSize12);
    font-weight: var(--fontWeiRegular);

    color: var(--gray50);

    padding-left: 20px;
    margin-top: 5px;
  }
  p ~ p {
    font-size: var(--fontSize14);
    font-weight: var(--fontWeiSemiBold);

    color: var(--colorPrimary);

    margin-top: 10px;
    padding-left: 20px;
  }
  button {
    width: 106px;

    font-weight: var(--fontWeiSemiBold);

    margin: 20px 0 0 20px;
  }

  @media (min-width: 768px) {
    min-width: 12rem;
  }
  @media (min-width: 850px) {
    min-width: 15rem;
  }
  @media (min-width: 1000px) {
    min-width: 10rem;
  }
  @media (min-width: 1190px) {
    min-width: 15rem;
  }
`;

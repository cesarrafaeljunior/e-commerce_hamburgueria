import styled from "styled-components";

export const StyledProducts = styled.li`
  min-width: 300px;

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

    background-color: var(--gray20);
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
`;

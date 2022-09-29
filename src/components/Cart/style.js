import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  max-width: 365px;
  height: 100%;

  border: solid 1px var(--gray20);
  border-radius: 5px 5px 0 0;

  margin-bottom: 50px;
  padding-bottom: 20px;

  .Cart__Header {
    background-color: var(--colorPrimary);

    height: 65px;

    border-radius: 5px 5px 0px 0px;
    h2 {
      display: flex;
      align-items: center;

      margin-left: 15px;
      max-width: 100%;
      height: 100%;

      color: var(--white);

      font-size: var(--fontSize18);
      font-weight: var(--fontWeiBold);
    }
  }

  ul {
    background-color: var(--white);
    margin: 20px 0 0 0;
  }
`;

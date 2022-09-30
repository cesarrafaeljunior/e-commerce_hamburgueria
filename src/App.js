import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  width: 90%;
  max-width: 1200px;

  margin: 0 auto;
  margin-top: 20px;

  section {
    width: 100%;
  }

  section ~ section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 500px;
    max-width: 365px;
  }

  @media (min-width: 960px) {
    width: 96%;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
    section ~ section {
      width: 60%;
    }
  }
`;

import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;

  width: 90%;

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
  }
`;

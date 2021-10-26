import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 200px;

  @media(max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100vw;
    padding: 40px 40px;
    padding-bottom: 200px;
  }

  @media(max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 40px 24px;
    padding-bottom: 200px;
  }
  
`;
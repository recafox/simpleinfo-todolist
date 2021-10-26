import styled from "styled-components";

export const StyledLogo = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 64px;
  line-height: 87px;
  font-weight: bold;
  margin-bottom: 40px;

  @media(max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 48px;
    line-height: 64px;
    margin-bottom: 24px;
  }
`;
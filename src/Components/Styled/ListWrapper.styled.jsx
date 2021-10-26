import styled from 'styled-components';

export const StyledListWrapper = styled.ul`
  min-height: 200px;
  padding-bottom: 40px;
  li {
    margin-bottom: 24px;
  }
  li:last-of-type {
    margin-bottom: 0;
  }

  @media(max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    li {
      margin-bottom: 12px;
    }
  }
`;
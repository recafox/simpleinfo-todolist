import styled from 'styled-components';

export const StyledSectionLabel = styled.p`
  color: ${({ theme }) => theme.colors.sectionLabel};
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 24px;

  @media(max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-bottom: 16px;
  }
`;
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: ${p => p.theme.space[4]}px;
  padding-top: 0;

  &:last-of-type {
    padding-bottom: 0px;
  }
`;

export const Title = styled.h2`
  padding-bottom: 10px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 26px;

  text-shadow: 3px 3px 3px ${p => p.theme.colors.accent};
  text-align: ${({ titlePosition }) => titlePosition};
  @media screen and (min-width: 480px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

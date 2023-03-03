import styled from 'styled-components';

export const Container = styled.div`
  margin: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  position: relative;

  min-width: 250px;
  max-width: 650px;
  overflow: hidden;
  box-shadow: 6px 6px 4px 0px ${p => p.theme.colors.shadow},
    -4px -4px 4px ${p => p.theme.colors.shadow};
  @media screen and (min-width: 480px) {
    padding: ${p => p.theme.space[5]}px;
  }
  @media screen and (min-width: 768px) {
    margin: ${p => p.theme.space[5]}px auto;

    min-width: 500px;
    max-width: 750px;
  }
`;

export const Title = styled.h2`
  margin-left: ${p => p.theme.space[3]}px;
  font-size: 24px;

  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  text-shadow: 6px 6px 6px ${p => p.theme.colors.black};
  text-align: center;

  @media screen and (min-width: 550px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

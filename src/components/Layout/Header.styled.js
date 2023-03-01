import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin: 0px auto;
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;

  min-width: 400px;
  max-width: 1200px;
`;

export const Navigation = styled.nav`
  margin-left: auto;
  display: flex;
  gap: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.m};
  a {
    padding: ${p => p.theme.space[2]}px 0;
  }
  .active {
    padding: ${p => p.theme.space[2]}px 0;
    border-bottom: 2px solid ${p => p.theme.colors.white};
  }
`;

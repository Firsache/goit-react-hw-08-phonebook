import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.white};
`;

export const HeaderContainer = styled.div`
  margin: 0px auto;
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[6]}px;

  min-width: 400px;
  max-width: 1200px;
`;

export const Navigation = styled.nav`
  margin-left: auto;
  display: flex;
  gap: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.black};

  font-size: 20px;
  a {
    padding: ${p => p.theme.space[2]}px 0;
  }
  .active {
    padding: ${p => p.theme.space[2]}px 0;
    color: ${p => p.theme.colors.white};
    border-bottom: 2px solid ${p => p.theme.colors.white};
  }
`;

export const MenuUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;

  img {
    border-radius: ${p => p.theme.radii.round};
  }
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[2]}px;
  width: 90px;
  height: ${p => p.theme.space[5]}px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body}px;
  text-align: center;

  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.space[1]}px solid ${p => p.theme.colors.accent};
  outline: none;

  transition: border-color ${p => p.theme.transition},
    color ${p => p.theme.transition};

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.black};
  }
`;

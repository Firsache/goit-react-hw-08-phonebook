import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MdContactPhone } from 'react-icons/md';

import { selectedIsLoggedIn } from 'redux/auth/selectors';
import { routes } from 'helpers/routes';

import { Title } from 'common/common.styled';
import { Box, ThemeSwitcher, UserMenu } from 'components';
import { HeaderContainer, Navigation, LinkStyled } from './Header.styled';

export const Header = ({ normalizedTheme }) => {
  const isLoggedIn = useSelector(selectedIsLoggedIn);

  return (
    <Box bg={normalizedTheme.colors.accent} as="header">
      <HeaderContainer>
        <LinkStyled to={routes.HOME}>
          <MdContactPhone size={35} />
          <Title>Phonebook</Title>
        </LinkStyled>

        <Navigation>
          {isLoggedIn ? (
            <NavLink to={routes.CONTACTS}>Contacts</NavLink>
          ) : (
            <>
              <NavLink to={routes.REGISTER}>Register</NavLink>
              <NavLink to={routes.LOGIN}>Sign In</NavLink>
            </>
          )}
        </Navigation>

        {isLoggedIn && <UserMenu />}

        <ThemeSwitcher />
      </HeaderContainer>
    </Box>
  );
};

import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { MdContactPhone } from 'react-icons/md';

import { selectedIsLoggedIn } from 'redux/auth/selectors';
import { routes } from 'helpers/routes';

import { Title } from 'common/common.styled';
import { Box, ThemeSwitcher, UserMenu } from 'components';
import { HeaderContainer, Navigation } from './Header.styled';

export const Header = ({ normalizedTheme }) => {
  const isLoggedIn = useSelector(selectedIsLoggedIn);

  return (
    <Box bg={normalizedTheme.colors.accent} as="header">
      <HeaderContainer>
        <Link to={routes.HOME}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={normalizedTheme.colors.white}
            as="div"
          >
            <MdContactPhone size={35} />
            <Title>Phonebook</Title>
          </Box>
        </Link>

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

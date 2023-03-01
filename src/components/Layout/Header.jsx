import { Title } from 'common/common.styled';
import { Box, ThemeSwitcher } from 'components';
import { routes } from 'helpers/routes';
import { Link, NavLink } from 'react-router-dom';
import { MdContactPhone } from 'react-icons/md';
import { HeaderContainer, Navigation } from './Header.styled';

export const Header = ({ normalizedTheme }) => {
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
          <NavLink to={routes.CONTACTS}>Contacts</NavLink>
          <NavLink to={routes.LOGIN}>Sign In</NavLink>
          <NavLink to={routes.REGISTER}>Sign Up</NavLink>
        </Navigation>

        <ThemeSwitcher />
      </HeaderContainer>
    </Box>
  );
};

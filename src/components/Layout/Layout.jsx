import { useSelector } from 'react-redux';
import { Link, Outlet, NavLink } from 'react-router-dom';
import { MdContactPhone } from 'react-icons/md';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles/globalStyles.styled';

import { selectThemeTitle } from 'redux/global/selectors';
import { theme } from 'styles/theme';
import { Box, ThemeSwitcher } from 'components';
import { Title } from '../App/App.styled';
import { colors } from 'styles/colors';
import { routes } from 'helpers/routes';

export const Layout = () => {
  const themeTitle = useSelector(selectThemeTitle);
  const normalizedTheme = { ...theme, ...colors[themeTitle] };

  return (
    <ThemeProvider theme={normalizedTheme}>
      <Box as="section">
        <Box
          position="relative"
          py={4}
          bg={normalizedTheme.colors.accent}
          as="div"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={normalizedTheme.colors.white}
            as="div"
          >
            <Link to={routes.HOME}>
              <MdContactPhone size={35} />
              <Title>Phonebook</Title>
            </Link>
          </Box>
          <nav>
            <NavLink to={routes.LOGIN}>Sign In</NavLink>
            <NavLink to={routes.REGISTER}>Sign Up</NavLink>
          </nav>

          <ThemeSwitcher />
        </Box>
        <Outlet />
        {/* <Container>
        <Form />
        <Section title="Contacts">
          {(contacts.length > 1 || filteredName) && <Filter />}
          <Contacts />
        </Section>
        {loading && <Loader themeNorm={normalizedTheme} />}
        {error && <div>Ooops, something went wrong.. Try a bit later</div>}
        <ToastContainer autoClose={3000} />
      </Container> */}
      </Box>
      <GlobalStyles />
    </ThemeProvider>
  );
};

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles/globalStyles.styled';

import { selectThemeTitle } from 'redux/global/selectors';
import { theme } from 'styles/theme';
import { Box, Header } from 'components';
import { colors } from 'styles/colors';

export const Layout = () => {
  const themeTitle = useSelector(selectThemeTitle);
  const normalizedTheme = { ...theme, ...colors[themeTitle] };

  return (
    <ThemeProvider theme={normalizedTheme}>
      <Box as="section">
        <Header normalizedTheme={normalizedTheme} />
        <Outlet />
      </Box>
      <GlobalStyles />
    </ThemeProvider>
  );
};

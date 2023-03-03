import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles/globalStyles.styled';

import { selectThemeTitle } from 'redux/global/selectors';
import { theme } from 'styles/theme';
import { Header, ParticleConfetti } from 'components';
import { colors } from 'styles/colors';
import { Section, Footer } from './Layout.styled';

export const Layout = () => {
  const themeTitle = useSelector(selectThemeTitle);
  const normalizedTheme = { ...theme, ...colors[themeTitle] };
  const isDesktop = useMediaQuery({ maxWidth: 767 });

  const url = 'https://github.com/Firsache';

  return (
    <ThemeProvider theme={normalizedTheme}>
      <Section>
        <Header normalizedTheme={normalizedTheme} />
        <Outlet />
        <Footer>
          &#169; 2023 - Phonebook
          <a href={url} rel="noopener noreferrer" target="_blank">
            <BsGithub size={22} />
          </a>
        </Footer>
        {(true || isDesktop) && <ParticleConfetti />}
      </Section>
      <GlobalStyles />
    </ThemeProvider>
  );
};

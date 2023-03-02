import { Container } from 'common/common.styled';
import { routes } from 'helpers/routes';

import { Main, StyledLink, AppTitle } from './Homepage.styled';

const HomePage = () => {
  return (
    <Container>
      <h1>Welcome to your Phonebook!</h1>

      <Main>
        <p>
          Searched for a place where you can keep and edit your contacts? You've
          found it! Test it yourself, we're sure you'll love our app!
        </p>
        <p>
          Follow the links{' '}
          <StyledLink to={routes.REGISTER}>Register</StyledLink> and{' '}
          <StyledLink to={routes.LOGIN}>Log in</StyledLink> and enjoy your{' '}
          <AppTitle>Phonebook</AppTitle>!
        </p>
      </Main>
    </Container>
  );
};

export default HomePage;

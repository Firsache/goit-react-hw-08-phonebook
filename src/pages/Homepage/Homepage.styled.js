import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.div`
  margin: ${p => p.theme.space[3]}px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 20px;
  line-height: 1.5;
`;
export const StyledLink = styled(Link)`
  font-size: 24px;
  color: ${p => p.theme.colors.accent};
  text-shadow: 1px 1px 1px ${p => p.theme.colors.black};
`;

export const AppTitle = styled.span`
  font-size: 26px;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-shadow: 1px 1px 1px ${p => p.theme.colors.accent};
`;

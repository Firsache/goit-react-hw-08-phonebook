import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
  margin-top: auto;
  border-top: 1px solid ${p => p.theme.colors.text};
`;

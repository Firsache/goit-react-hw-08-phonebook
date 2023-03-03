import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  @media screen and (min-width: 480px) {
    align-items: flex-start;
    justify-content: normal;
  }
`;
export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  gap: ${p => p.theme.space[4]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  min-width: 130px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;

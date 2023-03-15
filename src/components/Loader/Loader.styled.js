import styled from 'styled-components';

export const LoaderDelBtn = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  &:after {
    content: ' ';
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid ${p => p.theme.color.accent};
    border-color: ${p => p.theme.color.accent} transparent
      ${p => p.theme.color.text_light} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

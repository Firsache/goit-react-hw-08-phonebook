import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 350px;
  width: 100%;
  min-height: 150px;
  padding: 40px;

  background-color: #f7f7f7;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  transform: translate(-50%, -50%) scaleY(1);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 6px;
`;

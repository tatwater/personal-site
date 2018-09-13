import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100vw;
  }
  body {
    overflow-y: scroll;
  }
`;

export const Container = styled.div`
  min-width: 320px;
  padding-top: 72px;

  @media screen and (min-width: 768px) {
    padding-top: 86px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 110px;
  }
`;

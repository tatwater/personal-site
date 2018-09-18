import styled, { injectGlobal } from 'styled-components';


injectGlobal`
  html,
  body {
    height: 100vh;
    min-width: 320px;
    overflow: hidden;
    position: relative;
    width: 100vw;
  }
`;

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    'navigation'
    'content';
  grid-template-columns: 1fr;
  grid-template-rows: 15vh 1fr;

  @media screen and (min-width: 1024px) {
    grid-template-rows: 12vh 1fr;
  }
`;
export const Content = styled.div`
  grid-area: content;
`;

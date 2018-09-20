import styled, { injectGlobal } from 'styled-components';

import { BREAKPOINTS } from '../../../utils/vars';


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
  grid-template-rows: 14vh 1fr;
  width: 100vw;

  ${BREAKPOINTS.wideLayout} {
    grid-template-rows: 12vh 1fr;
  }
`;

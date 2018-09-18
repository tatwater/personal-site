import styled from 'styled-components';

import { RECIPE } from '../../../utils/vars';


export const Container = styled.div`
  @media screen and (min-width: 1024px) {
    margin: 0;
    position: fixed;
      top: calc(10vh + 83px);
      left: calc(100vw - ${RECIPE.PREP_WIDTH._1024} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1024} - 2vw);
  }
  @media screen and (min-width: 1440px) {
      left: calc(100vw - ${RECIPE.PREP_WIDTH._1440} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1440} - 2vw);
  }
`;
export const BackgroundFlair = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    background: #fafafa;
    display: block;
    position: fixed;
      top: 0;
      right: 8vw;
      bottom: 0;
    width: 35vw;
    z-index: 0;
  }
`;

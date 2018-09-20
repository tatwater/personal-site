import styled from 'styled-components';

import { BREAKPOINTS, RECIPE } from '../../../utils/vars';


export const Grid = styled.div`
  display: grid;
  grid-area: content;
  grid-template-areas:
    'header'
    'content'
    'navigation';
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr 60px;
  height: calc(100vh - 14vh);
  width: 100%;

  ${BREAKPOINTS.wideLayout} {
    height: calc(100vh - 12vh);
  }
`;
export const Header = styled.header`
  grid-area: header;
  padding: 10px 20px 10px 20px;
  width: 100%;

  ${BREAKPOINTS.wideLayout} {
    padding: 0;
    margin: 50px 0 50px calc(100vw - ${RECIPE.PREP_WIDTH._1024} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1024} - 2vw);
    width: ${RECIPE.PREP_WIDTH._1024};
  }
  ${BREAKPOINTS.extraWideLayout} {
    margin: 50px 0 50px calc(100vw - ${RECIPE.PREP_WIDTH._1440} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1440} - 2vw);
    width: ${RECIPE.PREP_WIDTH._1440};
  }
`;
export const SubHeading = styled.span`
  align-items: center;
  color: #C6C9CD;
  display: flex;
  font-size: 22px;
  font-weight: 400;
  height: 26px;
  justify-content: space-between;
  margin-bottom: 4px;
  position: relative;

  ${BREAKPOINTS.wideLayout} {
    height: 30px;
    font-size: 26px;

    &::before {
      background: #C6C9CD;
      content: '';
      display: ${props => props.drawLine ? 'block' : 'none'};
      height: 1px;
      opacity: .5;
      position: absolute;
        top: 50%;
        right: calc(100% + 16px);
      width 64px;
    }
  }
`;
export const Content = styled.main`
  grid-area: content;
  overflow-y: scroll;
  padding: 10px 20px 50px 20px;

  ${BREAKPOINTS.wideLayout} {
    padding: 0;
    margin-left: calc(100vw - ${RECIPE.PREP_WIDTH._1024} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1024} - 2vw);
    margin-right: 6vw;
    width: ${RECIPE.PREP_WIDTH._1024};
  }
  ${BREAKPOINTS.extraWideLayout} {
    margin-left: calc(100vw - ${RECIPE.PREP_WIDTH._1440} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1440} - 2vw);
    width: ${RECIPE.PREP_WIDTH._1440};
  }
`;

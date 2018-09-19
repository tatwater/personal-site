import styled from 'styled-components';

import { BREAKPOINTS, RECIPE } from '../../../utils/vars';


export const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  height: 100%;
`;
export const Header = styled.header`
  grid-area: header;
  padding: 10px 20px 20px 20px;

  ${BREAKPOINTS.wideLayout} {
    padding: 50px 0 50px calc(100vw - ${RECIPE.PREP_WIDTH._1024} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1024} - 2vw);
  }
  ${BREAKPOINTS.extraWideLayout} {
    padding: 50px 0 50px calc(100vw - ${RECIPE.PREP_WIDTH._1440} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1440} - 2vw);
  }
`;
export const SubHeading = styled.span`
  align-items: center;
  color: #C6C9CD;
  display: flex;
  font-size: 22px;
  font-weight: 400;
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
  overflow-x: scroll;
  padding: 10px 20px 0 20px;

  ${BREAKPOINTS.wideLayout} {
    padding-left: calc(100vw - ${RECIPE.PREP_WIDTH._1024} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1024} - 2vw);
    padding-right: 6vw;
  }
  ${BREAKPOINTS.extraWideLayout} {
    padding-left: calc(100vw - ${RECIPE.PREP_WIDTH._1440} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1440} - 2vw);
  }
`;

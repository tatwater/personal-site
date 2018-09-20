import styled from 'styled-components';

import { RECIPE } from '../../utils/vars';


export const HideOffCanvas = styled.div`
`;
export const BackgroundFlair = styled.div`
  display: none;
  z-index: -1;

  @media screen and (min-width: 1024px) {
    background: #fafafa;
    display: block;
    position: fixed;
      top: 0;
      right: ${props => props.showInstructions ?
        '10.75vw'
        :
        '8vw'
      };
      bottom: 0;
    transition: right .33s ease, width .33s ease;
    width: ${props => props.showInstructions ?
      '37vw'
      :
      '35vw'
    };
  }
`;
export const Prep = styled.div`
  margin: 40px 20px 30px;
  position: relative;
    top: 0;
    right: 0;

  @media screen and (min-width: 480px) {
    margin: 40px 30px 30px;
  }
  @media screen and (min-width: 768px) {
    margin: 40px 40px 40px;
  }
  @media screen and (min-width: 1024px) {
    margin: 0;
    position: absolute;
      top: 10vh;
      right: calc(2vw + ${RECIPE.PHOTO_MAX_WIDTH._1024} + 2vw);
    transform: translate3d(${props => props.showInstructions ?
      '-90vw, 0, 0'
      :
      '0, 0, 0'});
    transition: transform .33s ease;
    width: ${RECIPE.PREP_WIDTH._1024};
  }
  @media screen and (min-width: 1440px) {
      right: calc(2vw + ${RECIPE.PHOTO_MAX_WIDTH._1440} + 2vw);
    width: ${RECIPE.PREP_WIDTH._1440};
  }
`;
export const Header = styled.div`
  // transform: scale(${props => props.showInstructions ? '.8' : '1'});
  @media screen and (min-width: 1024px) {
    margin: 50px 0;
  }
`;
export const Category = styled.span`
  align-items: center;
  color: #C6C9CD;
  display: flex;
  font-size: 22px;
  font-weight: 400;
  justify-content: space-between;
  margin-bottom: 4px;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 26px;

    &::before {
      background: #C6C9CD;
      content: '';
      height: 1px;
      opacity: .5;
      position: absolute;
        top: 50%;
        right: calc(100% + 16px);
      width 64px;
    }
  }
`;
export const EditButton = styled.a`
  align-items: center;
  border-radius: 50%;
  color: #222F3E;
  display: flex;
  font-size: 16px;
  height: 40px;
  justify-content: center;
  text-decoration: none;
  transition: background .2s ease;
  width: 40px;

  &:hover {
    background: #C6C9CD;
  }
`;
export const Recipe = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ol {
    padding-left: 8px;

    @media screen and (min-width: 600px) {
      padding-left: 20px;
    }
    @media screen and (min-width: 768px) {
      padding-left: 30px;
    }
  }
  li {
    line-height: 1.3em;
    margin: 0 0 6px;
  }
`;
export const List = styled.ul`
  ${props => props.hideBullets && 'list-style-type: none'};
  padding-left: ${props => props.hideBullets ? '8px' : '20px'};
`;
export const Ingredients = styled.div`
  display: ${props => props.currentView === 'prep' ? 'block' : 'none'};
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    display: ${props => props.currentView === 'overview' || props.currentView === 'prep' ? 'block' : 'none'};
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;
export const Tools = styled.div`
  display: ${props => props.currentView === 'prep' ? 'block' : 'none'};
  margin-top: 30px;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-top: 0;
    padding-left: 40px;
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    display: ${props => props.currentView === 'overview' || props.currentView === 'prep' ? 'block' : 'none'};
    margin-top: 50px;
    padding-left: 0;
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 0;
    padding-left: 40px;
    width: 50%;
  }
`;

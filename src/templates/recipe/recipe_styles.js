import styled from 'styled-components';

import { BREAKPOINTS } from '../../utils/vars';


export const RecipeWrapperGrid = styled.div`
  transform: translate3d(0, 0, 0);
  transition: transform .33s ease;

  ${BREAKPOINTS.wideLayout} {
    transform: ${props => props.currentView === 'instructions' || props.currentView === 'notes' ? 'translate3d(-100vw, 0, 0)' : 'translate3d(0, 0, 0)'};
    width: 200vw;
  }
`;
export const BackgroundFlair = styled.div`
  display: none;
  z-index: -1;

  @media screen and (min-width: 1024px) {
    background: #fafafa;
    display: block;
    position: fixed;
      top: 0;
      right: ${props => props.currentView === 'instructions' || props.currentView === 'notes' ?
        '10.75vw'
        :
        '8vw'
      };
      bottom: 0;
    transition: right .33s ease, width .33s ease;
    width: ${props => props.currentView === 'instructions' || props.currentView === 'notes' ?
      '37vw'
      :
      '35vw'
    };
  }
`;
export const Header = styled.div`
  // transform: scale(${props => props.currentView === 'instructions' || props.currentView === 'notes' ? '.8' : '1'});
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
export const OnlyWideLayout = styled.div`
  display: none;

  ${BREAKPOINTS.wideLayout} {
    display: block;
  }
`;
export const NotWideLayout = styled.div`
  display: block;

  ${BREAKPOINTS.wideLayout} {
    display: none;
  }
`;
export const Photo = styled.div`
  ${props => props.src && 'background-image: url(' + props.src + ')'};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  display: ${props => props.currentView === 'overview' ? 'block' : 'none'};
  padding-top: 61.8%;
  width: 100%;

  ${BREAKPOINTS.wideLayout} {
    display: none;
  }
`;
export const List = styled.ul`
  ${props => props.hideBullets && 'list-style-type: none'};
  padding-left: ${props => props.hideBullets ? '8px' : '20px'};

  li {
    margin: 0 0 6px 0;
  }
`;
export const Ingredients = styled.div`
  display: ${props => props.currentView === 'prep' ? 'block' : 'none'};
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    display: block;
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
    display: block;
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
export const Prep = styled.div`
  display: flex;
  flex-direction: column;

  ${BREAKPOINTS.wideLayout} {
    align-items: flex-start;
    flex-direction: row;
  }
`;

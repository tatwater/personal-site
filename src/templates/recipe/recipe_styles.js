import styled from 'styled-components';

import { RECIPE } from '../../utils/vars';


export const HideOffCanvas = styled.div`
  overflow-x: hidden;
  position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;
export const BackgroundFlair = styled.div`
  display: none;
  z-index: 0;

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
export const Photo = styled.div`
  ${props => props.src && 'background-image: url(' + props.src + ')'};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 61.8%;
  position: relative;
    left: -20px;
  width: calc(100% + 40px);

  @media screen and (min-width: 480px) {
    border-radius: 10px;
    box-shadow: 0 5px 30px rgba(34, 47, 62, .2);
    left: 0;
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
export const TimeWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  @media screen and (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
  }
`;
export const TimeBlock = styled.div`
  align-items: center;
  border: 1px solid #eee;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  height: 46px;
  justify-content: center;
  width: 90px;

  & + div {
    margin-left: 12px;
  }
`;
export const TimeAmount = styled.span`
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 1px;
`;
export const TimeType = styled.span`
  color: #C6C9CD;
  font-size: 12px;
  font-weight: 300;
`;
export const TotalTime = styled.div`
  color: #C6C9CD;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;

  svg {
    height: 18px;
    margin-right: 6px;
  }

  @media screen and (max-width: 479px) {
    ${TimeAmount} {
      font-size: 18px;
      font-weight: 500;
    }
    ${TimeType} {
      font-size: 18px;
      font-weight: 500;
    }
  }
  @media screen and (min-width: 480px) {
    align-items: center;
    background: #222F3E;
    border-radius: 50%;
    color: #fff;
    display: none;
    flex-direction: column;
    font-size: 16px;
    font-weight: 700;
    height: 52px;
    justify-content: center;
    margin: 0 16px 0 0;
    top: 0;
    width: 52px;

    svg {
      display: none;
    }
  }
`;
export const TimeBreakdown = styled.div`
  align-items: center;
  display: flex;

  ${TotalTime} {
    display: none;
  }

  @media screen and (min-width: 480px) {
    ${TotalTime} {
      display: flex;
    }
  }
`;
export const InstructionsButton = styled.button`
  align-items: center;
  background: #529F8D;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, .16);
  color: #fff;
  cursor: pointer;
  display: none;
  font-family: 'Poppins';
  font-size: 14px;
  height: 50px;
  letter-spacing: .05em;
  outline: none;
  padding: 0 40px;
  transition: box-shadow .2s ease;

  svg {
    margin-left: 16px;
  }

  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, .16);
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;
export const Yield = styled.span`
  display: block;
  font-weight: 700;
  margin: 40px 0;
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
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;
export const Tools = styled.div`
  margin-top: 30px;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-top: 0;
    padding-left: 40px;
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
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
export const Instructions = styled.div`
  margin-top: 30px;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-top: 50px;
  }
`;

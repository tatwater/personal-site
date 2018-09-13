import styled from 'styled-components';

import { RECIPE } from '../../utils/vars';


export const BackgroundFlair = styled.div`
  background: #fafafa;
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
  z-index: 0;
`;
export const Content = styled.div`
  margin: 40px 20px 60px;

  @media screen and (min-width: 600px) {
    margin: 40px 30px 60px;
  }
  @media screen and (min-width: 768px) {
    margin: 30px 40px 80px;
  }
  @media screen and (min-width: 880px) {
    margin: 40px auto 100px;
    max-width: 800px;
  }
  @media screen and (min-width: 1024px) {
    margin: 0 0 100px 0;
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
      top: 140px;
      right: calc(2vw + ${RECIPE.PHOTO_MAX_WIDTH._1440} + 2vw);
    width: ${RECIPE.PREP_WIDTH._1440};
  }
`;
export const Header = styled.div`
  // transform: scale(${props => props.showInstructions ? '.8' : '1'});
  margin: 50px 0;
`;
export const Category = styled.span`
  color: #C6C9CD;
  display: block;
  font-size: 22px;
  font-weight: 400;
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
export const TimeWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  @media screen and (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin: 20px 0;
  }
`;
export const Yield = styled.span`
  display: block;
  font-weight: 700;
  margin: 40px 0;
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
  margin-bottom: 50px;

  svg {
    height: 18px;
    margin-right: 6px;
  }

  @media screen and (max-width: 599px) {
    ${TimeAmount} {
      font-size: 18px;
      font-weight: 500;
    }
    ${TimeType} {
      font-size: 18px;
      font-weight: 500;
    }
  }
  @media screen and (min-width: 600px) {
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
export const ButtonRowWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const TimeBreakdown = styled.div`
  align-items: center;
  display: flex;

  ${TotalTime} {
    display: none;
  }

  @media screen and (min-width: 600px) {
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
  display: flex;
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

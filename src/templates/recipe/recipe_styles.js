import styled from 'styled-components';

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
    margin: 80px 500px 100px 80px;
  }
  @media screen and (min-width: 1200px) {
    margin: 80px 525px 100px 80px;
  }
  @media screen and (min-width: 1440px) {
    margin: 100px auto 160px 15%;
    max-width: 800px;
  }
`;
export const Category = styled.span`
  color: #C6C9CD;
  font-family: Playfair Display;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 30px;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 20px;

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
  font-family: Montserrat;
  margin: 10px 0 50px 0;

  @media screen and (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin: 25px 0 80px 0;
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
export const Photo = styled.div`
  ${props => props.src && 'background-image: url(' + props.src + ')'};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 20px;
  padding-top: 60%;
  position: relative;
    top: -20px;
    left: -20px;
  width: calc(100% + 40px);
  z-index: 1;

  @media screen and (min-width: 600px) {
    border-radius: 6px;
    box-shadow: 0 3px 15px rgba(34, 47, 62, .16);
    top: 10px;
    left: -10px;
    margin-bottom: 40px;
    width: calc(100% + 20px);
  }
  @media screen and (min-width: 880px) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1024px) {
    border-radius: 10px 0 0 10px;
    box-shadow: 0 5px 20px rgba(34, 47, 62, .20);
    padding: 0;
    position: fixed;
      top: 80px;
      right: 0;
      bottom: 30px;
      left: auto;
    width: 440px;
    z-index: 100;
  }
  @media screen and (min-width: 1440px) {
    left: calc(900px + 15%);
    width: auto;
  }
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
export const Recipe = styled.div`
  display: flex;
  font-family: Montserrat;
  font-weight: 300;
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

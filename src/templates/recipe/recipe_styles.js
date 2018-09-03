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
    left: -10px;
    width: calc(100% + 20px);
  }
  @media screen and (min-width: 600px) {
    margin-bottom: 30px;
    top: -30px;
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
export const Recipe = styled.div`
  display: flex;
  font-family: Montserrat;
  font-weight: 300;
  flex-wrap: wrap;
  width: 100%;

  ul {
    list-style-type: none;
    padding-left: 8px;
  }
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

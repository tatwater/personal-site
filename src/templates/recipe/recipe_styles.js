import styled from 'styled-components';

export const Content = styled.div`
  margin: 120px 40% 160px 15%;
  max-width: 800px;
`;
export const PhotoWrapper = styled.div`
  overflow: hidden;
  position: fixed;
    top: 80px;
    right: 0;
    bottom: 30px;
    left: calc(15% + 900px);
  z-index: 100;
`;
export const Photo = styled.img`
  min-height: 100%;
  position: absolute;
    top: 50%;
    left: 62%;
  transform: translate(-50%, -50%);
`;
export const Category = styled.span`
  color: #C6C9CD;
  font-family: Butler;
  font-size: 34px;
  font-weight: 500;
  margin-bottom: 20px;
  position: relative;

  &::before {
    background: #C6C9CD;
    content: '';
    height: 1px;
    position: absolute;
      top: 40%;
      right: calc(100% + 16px);
    width 64px;
  }
`;
export const Recipe = styled.div`
  display: flex;
  font-family: Montserrat;
  font-weight: 300;
  flex-wrap: wrap;
  width: 100%;
`;
export const Ingredients = styled.div`
  width: 50%;

  ul {
    list-style-type: none;
    padding-left: 8px;
  }
  li {
    line-height: 1.3em;
    margin: 0 0 4px;
  }
`;
export const Tools = styled.div`
  padding-left: 40px;
  width: 50%;

  ul {
    list-style-type: none;
    padding-left: 8px;
  }
  li {
    line-height: 1.3em;
    margin: 0 0 4px;
  }
`;
export const Instructions = styled.div`
  margin-top: 70px;
  width: 100%;
`;

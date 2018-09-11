import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, .16);
  position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  z-index: 1000;
`;
export const Container = styled.nav`
  background: #fff;
  box-shadow: 0 10px 50px rgba(0, 0, 0, .16);
  padding: 10px;
  position: fixed;
    top: 10px;
    right: 10px;
    bottom: 10px;
    left: 10px;
  z-index: 1001;

  @media screen and (min-width: 1024px) {
    padding: 10px 20px;
    top: 20px;
    right: 20px;
    bottom: 20px;
    left: 20px;
  }
`;
export const TopBar = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  margin-bottom: 10px;

  @media screen and (min-width: 1024px) {
    height: 50px;
  }
`;
export const CloseButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 40px;
  outline: none;
  transition: background .1s ease;
  width: 40px;

  &:hover,
  &:focus {
    background: #fafafa;
  }
`;
export const CloseLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;
`;
export const NavLayout = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-areas:
    'work'
    'kitchen'
    'yoga'
    'social';
  grid-template-columns: 1fr;
  grid-template-rows: calc((100vh - 140px - 30px) / 3) calc((100vh - 140px - 30px) / 3) calc((100vh - 140px - 30px) / 3) 1fr;

  @media screen and (min-width: 1024px) {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-areas:
      'work work social'
      'kitchen yoga social';
    grid-template-columns: 3fr 3fr 2fr;
    grid-template-rows: calc((100vh - 220px - 30px) / 2) calc((100vh - 220px - 30px) / 2);
    padding: 20px 60px 90px 120px
  }
`;
export const Work = styled.div`
  background: #fafafa;
  grid-area: work;
  position: relative;

  a {
    position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
  }
`;
export const Kitchen = styled.div`
  background: #fafafa;
  grid-area: kitchen;
  position: relative;

  a {
    position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
  }
`;
export const Yoga = styled.div`
  background: #fafafa;
  grid-area: yoga;
  position: relative;

  a {
    position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
  }
`;
export const Social = styled.div`
  grid-area: social;

  @media screen and (min-width: 1024px) {
    padding: 0 20px;
  }
`;
export const Title = styled.span`
  font-size: 28px;
  font-weight: 700;
  position: absolute;
    left: 24px;
    bottom: 16px;
`;

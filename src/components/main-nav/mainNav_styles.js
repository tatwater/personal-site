import styled from 'styled-components';

import { BREAKPOINTS, COLORS } from '../../utils/vars';

export const Overlay = styled.div`
  background: ${COLORS.overlayShade};
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
  padding: 0 10px 20px 10px;
  position: fixed;
    top: 2vh;
    right: calc(3vw - 6px);
    bottom: 2vh;
    left: calc(3vw - 6px);
  z-index: 1001;

  ${BREAKPOINTS.wideLayout} {
    padding: 0 14px;
    top: 2vh;
    right: calc(2vw - 14px);
    bottom: 2vh;
    left: calc(2vw - 14px);
  }
`;
export const TopBar = styled.div`
  align-items: center;
  display: flex;
  height: 10vh;

  ${BREAKPOINTS.wideLayout} {
    height: 8vh;
  }
`;
export const CloseButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  outline: none;
  transition: background .1s ease;
  width: 40px;

  &:hover,
  &:focus {
    background: ${COLORS.borderPrimary};
  }
`;
export const CloseLabel = styled.span`
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
`;
export const NavLayout = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-areas:
    'work work'
    'kitchen yoga'
    'social social'
    'footer footer';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 80px 40px;
  height: calc(100vh - 14vh - 20px);

  ${BREAKPOINTS.wideLayout} {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-areas:
      'work work social'
      'work work social'
      'kitchen yoga social'
      'kitchen yoga footer';
    grid-template-columns: 3fr 3fr 2fr;
    grid-template-rows: 1fr 60px 1fr 60px;
    height: calc(100vh - 10vh);
    padding: 20px 60px 120px 120px
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
export const Title = styled.span`
  font-family: 'Poppins';
  font-size: 28px;
  font-weight: 700;
  position: absolute;
    left: 24px;
    bottom: 16px;
`;
export const Social = styled.div`
  align-items: center;
  display: flex;
  grid-area: social;
  justify-content: space-between;
  padding: 0 20px;

  ${BREAKPOINTS.wideLayout} {
    display: grid;
    grid-row-gap: 30px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr);
    padding: 0 0 30px 30px;
  }
`;
export const SocialTile = styled.a`
  align-items: center;
  background: transparent;
  border-radius: 50%;
  color: ${COLORS.textPrimary};
  cursor: pointer;
  display: flex;
  font-size: 24px;
  height: 40px;
  justify-content: center;
  outline: none;
  text-decoration: none;
  transition: background .1s ease, box-shadow .1s ease;
  width: 40px;

  &:hover,
  &:focus {
    background: ${COLORS.borderPrimary};
  }

  ${BREAKPOINTS.wideLayout} {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 rgba(34, 47, 62, .10);
    height: 100%;
    justify-content: flex-start;
    padding: 10px;
    width: 100%;

    &:hover,
    &:focus {
      background: #fff;
      box-shadow: 0 5px 30px rgba(34, 47, 62, .10);
    }
  }
`;
export const SocialIcon = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;

  ${BREAKPOINTS.wideLayout} {
    width: 70px;
  }
`;
export const SocialText = styled.div`
  align-items: flex-start;
  color: ${COLORS.textTertiary};
  display: none;
  flex-direction: column;
  font-size: 14px;
  justify-content: center;

  h3 {
    margin-bottom: 2px;
  }

  ${BREAKPOINTS.wideLayout} {
    display: flex;
  }
`;
export const Footer = styled.div`
  align-items: center;
  display: flex;
  grid-area: footer;
  justify-content: flex-end;
  padding: 0 10px;
`;
export const TextWrapper = styled.div`
  align-items: flex-end;
  color: ${COLORS.textTertiary};
  flex-direction: column;
  font-size: 12px;
  line-height: 20px;
  margin-right: 14px;
  text-align: right;
`;
export const EmailButton = styled.a`
  align-items: center;
  background: transparent;
  box-shadow: 0 0 0 1px ${COLORS.textTertiary};
  border-radius: 50%;
  color: ${COLORS.textTertiary};
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  outline: none;
  transition: background .1s ease;
  width: 40px;

  &:hover,
  &:focus {
    background: ${COLORS.backgroundGrey};
  }
`;

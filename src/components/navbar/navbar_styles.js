import styled from 'styled-components';
import { Link } from 'gatsby';

import { BREAKPOINTS, COLORS } from '../../utils/vars';


export const Container = styled.nav`
  align-items: center;
  display: flex;
  grid-area: navigation;
  justify-content: space-between;
  padding: 0 3vw;

  ${BREAKPOINTS.wideLayout} {
    padding: 0 6vw 0 2vw;
  }
`;
export const SimplifiedNavbar = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 6vw);

  ${BREAKPOINTS.wideLayout} {
    justify-content: flex-start;
    width: auto;
  }
`;
export const MainNavButton = styled.button`
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
export const HamburgerIcon = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 18px;
  justify-content: space-between;

  div {
    background: ${COLORS.textPrimary};
    height: 2px;
    width: 22px;

    &:nth-of-type(2) {
      width: 18px;
    }
  }
`;
export const HomeLink = styled(Link)`
  align-items: center;
  display: flex;
  margin: 0 12px;
  text-decoration: none;
`;
export const Logo = styled.img`
  height: 30px;
  vertical-align: bottom;
`;
export const SectionName = styled.span`
  color: ${COLORS.textTertiary};
  font-family: 'Poppins';
  font-size: 30px;
  font-weight: 300;
  margin-left: 16px;
`;
export const SearchButton = styled.div`
  height: 40px;
  width: 40px;

  ${BREAKPOINTS.wideLayout} {
    display: none;
  }
`;
export const ExpandedMenuWrapper = styled.div`
  align-items: center;
  display: none;

  ${BREAKPOINTS.wideLayout} {
    display: flex;
  }
`;

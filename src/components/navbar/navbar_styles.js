import styled from 'styled-components';
import { Link } from 'gatsby';


export const Container = styled.nav`
  align-items: center;
  background: #fff;
  display: flex;
  height: 60px;
  justify-content: center;
  padding: 0;
  position: fixed;
    top: 0;
    right: 0;
    left: 0;
  z-index: 50;

  @media screen and (min-width: 768px) {
    height: 80px;
  }
  @media screen and (min-width: 1024px) {
    background: none;
    justify-content: space-between;
    padding: 0 100px 0 40px;
  }
  @media screen and (min-width: 1440px) {
    height: 110px;
  }
`;
export const BrandWrapper = styled.div`
  align-items: center;
  display: flex;
`;
export const MainNavButton = styled.button`
  align-items: center;
  background: #fff;
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
    background: #EFF0F3;
  }
`;
export const HamburgerIcon = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 18px;
  justify-content: space-between;

  div {
    background: #222F3E;
    height: 2px;
    width: 22px;

    &.small {
      width: 18px;
    }
  }
`;
export const HomeLink = styled(Link)`
  align-items: center;
  display: flex;
  text-decoration: none;
`;
export const Logo = styled.img`
  height: 30px;
  margin-left: 12px;
  vertical-align: bottom;
`;
export const SectionName = styled.span`
  color: #C6C9CD;
  font-family: 'Poppins';
  font-size: 30px;
  font-weight: 300;
  margin-left: 18px;
`;
export const MenuWrapper = styled.div`
  align-items: center;
  display: flex;
`;

import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  padding-top: 72px;

  @media screen and (min-width: 768px) {
    padding-top: 86px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 110px;
  }
`;
export const Navbar = styled.nav`
  align-items: center;
  background: #fff;
  display: flex;
  height: 72px;
  justify-content: center;
  padding: 0;
  position: fixed;
    top: 0;
    right: 0;
    left: 0;
  z-index: 50;

  @media screen and (min-width: 768px) {
    height: 86px;
  }
  @media screen and (min-width: 1024px) {
    height: 110px;
    justify-content: space-between;
    padding: 0 100px 0 80px;
  }
`;
export const BrandWrapper = styled.div`
  align-items: center;
  display: flex;
`;
export const Logo = styled.img`
  height: 30px;
`;
export const SectionName = styled.span`
  color: #C6C9CD;
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 300;
  margin-left: 16px;

  @media screen and (min-width: 768px) {
    position: relative;
      top: -1px;
  }
`;

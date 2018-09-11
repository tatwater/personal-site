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

import styled, {keyframes} from 'styled-components';
import { Link } from 'gatsby';

import { BREAKPOINTS } from '../../utils/vars';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const Container = styled.div`
  align-items: flex-start;
  display: inline-flex;
  height: 100%;
`;
export const Photo = styled.div`
  ${props => props.src && 'background-image: url(' + props.src + ')'};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 2px 10px #fff;
  margin-bottom: 10px;
  padding-top: 140%;
  transition: box-shadow .2s ease;
  width: 100%;

  ${BREAKPOINTS.wideLayout} {
    margin-bottom: 20px;
  }
`;
export const Card = styled(Link)`
  animation: ${fadeIn} .3s ease-out;
  animation-fill-mode: both;
  display: block;
  flex-shrink: 0;
  margin-right: 30px;
  text-decoration: none;
  width: calc(.618 * (100vh - 14vh - 80px - 50px));

  &:nth-of-type(2) {
    animation-delay: .1s;
  }
  &:nth-of-type(3) {
    animation-delay: .2s;
  }
  &:nth-of-type(4) {
    animation-delay: .3s;
  }
  &:nth-of-type(5) {
    animation-delay: .4s;
  }
  &:nth-of-type(6) {
    animation-delay: .5s;
  }
  &:last-of-type {
    margin-right: 0;
  }

  &:hover ${Photo} {
    box-shadow: 0 5px 30px rgba(34, 47, 62, .15);
  }

  ${BREAKPOINTS.wideLayout} {
    max-width: 300px;
    width: calc(.618 * (100vh - 12vh - 213px - 100px));
  }
`;
export const Title = styled.span`
  display: block;
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2em;
  margin-bottom: 2px;
`;
export const Time = styled.span`
  color: #C6C9CD;
  display: block;
  line-height: 1.4em;
`;

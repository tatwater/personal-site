import styled from 'styled-components';
import Link from 'gatsby-link';

import { RECIPE } from '../../utils/vars';


export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  margin-top: 70px;

  @media screen and (min-width: 1024px) {
    margin: 0;
    padding-right: 70px;
    position: absolute;
      top: calc(10vh + 232px);
      left: calc(100vw - ${RECIPE.PREP_WIDTH._1024} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1024} - 2vw);
  }
  @media screen and (min-width: 1440px) {
      left: calc(100vw - ${RECIPE.PREP_WIDTH._1440} - 2vw - ${RECIPE.PHOTO_MAX_WIDTH._1440} - 2vw);
  }
`;
export const Photo = styled.div`
  ${props => props.src && 'background-image: url(' + props.src + ')'};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 2px 10px #fff;
  margin-bottom: 20px;
  padding-top: 140%;
  transition: box-shadow .2s ease;
  width: 100%;
`;
export const Card = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  width: 300px;

  &:nth-of-type(1) {
    // 
  }

  &:hover ${Photo} {
    box-shadow: 0 5px 30px rgba(34, 47, 62, .15);
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

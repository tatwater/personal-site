import styled from 'styled-components';

import { RECIPE } from '../../../utils/vars';


export const Container = styled.div`
  margin-bottom: 20px;
  position: relative;
    top: -20px;
    right: -20px;
  width: calc(100% + 40px);

  @media screen and (min-width: 600px) {
    margin-bottom: 40px;
      top: 10px;
      right: -10px;
    width: calc(100% + 20px);
  }
  @media screen and (min-width: 880px) {
    margin-bottom: 50px;
  }


  @media screen and (min-width: 1024px) {
    height: 85vh;
    margin: 0;
    position: fixed;
      top: 10vh;
      right: 2vw;
    transform: translate3d(${props => props.showInstructions ?
      '-48vw, 0, 0'
      :
      '0, 0, 0'
    });
    transition: transform .33s ease;
    width: ${props => props.showInstructions ?
      '50vw'
      :
      RECIPE.PHOTO_MAX_WIDTH._1024
    };
  }
  @media screen and (min-width: 1440px) {
    height: 77.5vh;
      top: 12.5vh;
    width: ${props => props.showInstructions ?
      '50vw'
      :
      RECIPE.PHOTO_MAX_WIDTH._1440
    };
  }
`;
export const Photo = styled.div`
  ${props => props.src && 'background-image: url(' + props.src + ')'};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(34, 47, 62, .2);
  height: 1080px;
  margin-bottom: 0;
  position: absolute;
    top: 50%;
    left: 50%;
  width: 770px;
`;
export const PreparationButton = styled.button`
  align-items: center;
  background: #529F8D;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, .16);
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: 'Poppins';
  font-size: 14px;
  height: 50px;
  letter-spacing: .05em;
  opacity: ${props => props.showInstructions ?
    '1'
    :
    '0'
  };
  outline: none;
  padding: 0 40px;
  position: absolute;
    right: 4vw;
    bottom: 45px;
  transition: opacity .33s ease, visibility .33s ease, box-shadow .2s ease;
  visibility: ${props => props.showInstructions ?
    'visible'
    :
    'hidden'
  };

  svg {
    margin-right: 16px;
  }

  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, .16);
  }
`;

import styled from 'styled-components';

import { BREAKPOINTS, RECIPE } from '../../../utils/vars';


export const Container = styled.div`
  margin-top: 10px;
  
  @media screen and (min-width: 1024px) {
    height: 85vh;
    margin: 0;
    position: fixed;
      top: 0;
      right: 102vw;
    transform: translate3d(${props => props.currentView === 'instructions' || props.currentView === 'notes' ?
      '52vw, 0, 0'
      :
      '0, 0, 0'
    });
    transition: transform .33s ease;
    width: ${props => props.currentView === 'instructions' || props.currentView === 'notes' ?
      '50vw'
      :
      RECIPE.PHOTO_MAX_WIDTH._1024
    };
  }
  @media screen and (min-width: 1440px) {
    height: 77.5vh;
    width: ${props => props.currentView === 'instructions' || props.currentView === 'notes' ?
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
  border-radius: 5px;
  display: none;
  padding-top: 61.8%;
  width: 100%;

  ${BREAKPOINTS.wideLayout} {
    border-radius: 16px;
    box-shadow: 0 30px 90px rgba(34, 47, 62, .25);
    display: block;
    height: 1080px;
    margin-bottom: 0;
    padding: 0;
    position: absolute;
      top: 50%;
      left: 50%;
    width: 770px;
  }
`;
export const PreparationButton = styled.button`
  align-items: center;
  background: #529F8D;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, .16);
  color: #fff;
  cursor: pointer;
  display: none;
  font-family: 'Poppins';
  font-size: 14px;
  height: 50px;
  letter-spacing: .05em;
  opacity: ${props => props.currentView === 'instructions' || props.currentView === 'notes' ?
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
  visibility: ${props => props.currentView === 'instructions' || props.currentView === 'notes' ?
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

  ${BREAKPOINTS.wideLayout} {
    display: flex;
  }
`;

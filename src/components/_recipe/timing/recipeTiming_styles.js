import styled from 'styled-components';

import { BREAKPOINTS, COLORS, RECIPE } from '../../../utils/vars';


export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  padding: 30px 20px;
  position: relative;
    left: -20px;
  width: 100vw;

  ${BREAKPOINTS.wideLayout} {
    align-items: center;
    justify-content: space-between;
    padding: 14px 30px 50px 0;
    left: 0;
    width: calc(${RECIPE.PREP_WIDTH._1024} + 30px);
  }
  ${BREAKPOINTS.extraWideLayout} {
    width: calc(${RECIPE.PREP_WIDTH._1440} + 30px);
  }
`;
export const TimeBreakdown = styled.div`
  align-items: center;
  display: flex;
  padding-right: 20px;
`;
export const TimeBlock = styled.div`
  align-items: center;
  background: ${props => props.isTotal ? COLORS.textPrimary : '#fff'};
  border: ${props => props.isTotal ? 'none' : '1px solid #eee'};
  border-radius: ${props => props.isTotal ? '50%' : '3px'};
  color: ${props => props.isTotal ? '#fff' : COLORS.textPrimary};
  display: flex;
  flex-direction: column;
  height: ${props => props.isTotal ? '52px' : '46px'};
  justify-content: center;
  width: ${props => props.isTotal ? '52px' : '90px'};

  & + div {
    margin-left: ${props => props.isTotal ? '16px' : '12px'};
  }
`;
export const TimeAmount = styled.span`
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 1px;
`;
export const TimeType = styled.span`
  color: #C6C9CD;
  font-size: 12px;
  font-weight: 300;
`;
export const InstructionsButton = styled.button`
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
  outline: none;
  padding: 0 40px;
  transition: box-shadow .2s ease;

  svg {
    margin-left: 16px;
  }

  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, .16);
  }

  ${BREAKPOINTS.wideLayout} {
    display: flex;
  }
`;

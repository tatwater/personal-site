import styled from 'styled-components';

import { BREAKPOINTS, COLORS } from '../../../utils/vars';


export const Container = styled.div`
  align-items: stretch;
  box-shadow: 0 -1px 0 0 ${COLORS.borderPrimary};
  display: flex;
  grid-area: navigation;

  ${BREAKPOINTS.wideLayout} {
    display: none;
  }
`;
export const Tab = styled.button`
  align-items: center;
  background: ${props => props.active ? COLORS.backgroundGrey : '#fff' };
  border: none;
  color: ${props => props.active ? COLORS.textPrimary : COLORS.textTertiary };
  display: flex;
  font-size: 20px;
  flex-shrink: 1;
  justify-content: center;
  outline: none;
  transition: background .1s ease, color .1s ease;
  width: 100%;
`;

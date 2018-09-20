import styled from 'styled-components';
import { BREAKPOINTS } from '../../../utils/vars';


export const Container = styled.div`
  display: ${props => props.currentView === 'overview' ? 'block' : 'none'};
  
  ${BREAKPOINTS.wideLayout} {
    display: none;
  }
`;
export const MobileHeading = styled.h3`
`;

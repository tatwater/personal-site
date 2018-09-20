import styled from 'styled-components';


export const Grid = styled.div`
display: grid;
grid-template-areas:
  'header'
  'content'
  'navigation';
grid-template-columns: 1fr;
grid-template-rows: min-content 1fr 60px;
height: 100%;
`;

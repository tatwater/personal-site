import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 1024px) {
    // height: 80vh;
    margin-bottom: 100px;
    padding: 0 20px;
    position: absolute;
      top: 10vh;
      right: ${props => props.showInstructions ?
        '8vw'
        :
        '-60vw'
      };
    transition: right .33s ease;
    width: 45vw;
  }
  @media screen and (min-width: 1440px) {
    top: 12.5vh;
  }
`;
export const Header = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin: 50px 30px;
`;
export const Kicker = styled.span`
  color: #C6C9CD;
  display: block;
  font-size: 20px;
  margin-bottom: 4px;
`;
export const Title = styled.span`
  display: block;
  font-family: 'Poppins';
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2em;
`;
export const CurrentStep = styled.span`
  color: #526199;
  font-family: 'Poppins';
  font-size: 78px;
  font-weight: 700;
  margin-left: 20px;
  position: relative;
    bottom: -9px;

  &::after {
    color: #C6C9CD;
    content: '/ ${props => props.numSteps < 9 && '0'}${props => props.numSteps && props.numSteps}';
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 400;
    position: absolute;
      left: calc(100% + 10px);
      bottom: 13px;
    text-align: left;
    width: 40px;
  }
`;
export const List = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const Step = styled.li`
  background: ${props => props.active ? '#526199' : 'transparent'};
  border-radius: 5px;
  box-shadow: ${props => props.active ? '0 10px 30px rgba(34, 47, 62, .16)' : '0 10px 30px transparent'};
  color: ${props => props.active ? '#fff' : 'inherit'};
  color: ${props => props.done && '#C6C9CD'};
  cursor: pointer;
  font-size: ${props => props.active ? '18px' : 'inherit'};
  line-height: 1.4em;
  margin: ${props => props.active ? '20px 0' : '0'};
  padding: ${props => props.active ? '20px 30px' : '8px 50px'};
  transition: background .2s ease, box-shadow .2s ease, color .2s ease, font-size .2s ease, margin .2s ease, padding .2s ease;
`;
export const Controls = styled.div`
  position: fixed;
    right: ${props => props.showInstructions ?
      '4vw'
      :
      '-64vw'
    };
    bottom: 10vh;
  transition: right .33s ease;
  width: 60px;
`;
export const NotesButton = styled.button`
  align-items: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  height: 60px;
  justify-content: center;
  margin-top: 20px;
  outline: none;
  width: 60px;
`;
export const NavButton = styled.button`
  align-items: center;
  background: #EFF0F3;
  box-shadow: 0 5px 20px #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  height: 60px;
  justify-content: center;
  margin-top: 20px;
  outline: none;
  transition: box-shadow .2s ease;
  width: 60px;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, .16);
  }
`;

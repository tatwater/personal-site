import styled from 'styled-components';


export const Overlay = styled.button`
  display: ${props => props.currentView === 'notes' ? 'block' : 'none'};
  height: 100%;
  position: fixed;
    top: 0;
    left: 0;
  width: 100%;
  z-index: 100;
`;
export const Container = styled.div`
  display: ${props => props.currentView === 'notes' ? 'block' : 'none'};

  @media screen and (min-width: 1024px) {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(34, 47, 62, .2);
    display: block;
    visibility: ${props => props.currentView === 'notes' ? 'visible' : 'hidden'};
    margin: 0 0 150px 0;
    padding: 20px 50px 30px 40px;
    opacity: ${props => props.currentView === 'notes' ? '1' : '0'};
    position: fixed;
      right: calc(4vw + 40px);
      bottom: 10vh;
    transform: translate3d(${props => props.currentView === 'notes' ?
      '0, 0, 0'
      :
      '0, 40px, 0'
    });
    transition: opacity .2s ease, transform .2s ease;
    width: 25vw;
    z-index: 101;
  }
`;
export const MobileHeading = styled.h3`
  @media screen and (min-width: 1024px) {
    margin-top: 20px;
    padding: 0;
  }
`;
export const List = styled.ol`
  margin: 0;
  padding-left: 24px;

  li {
    margin: 10px 0;
  }
`;
export const NotesButton = styled.button`
  align-items: center;
  background: #fafafa;
  border: none;
  border-radius: 50%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, .16);
  cursor: pointer;
  display: none;
  font-size: 20px;
  height: 60px;
  justify-content: center;
  outline: none;
  position: absolute;
    right: -40px;
    bottom: 10px;
  transform: translate3d(${props => props.currentView === 'notes' ?
    '0, 0, 0'
    :
    '0, -40px, 0'
  });
  transition: transform .2s ease;
  width: 60px;
  z-index: 102;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;
export const NumNotes = styled.span`
  align-items: center;
  background: #FF7555;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-family: 'Poppins';
  font-size: 11px;
  font-weight: 700;
  height: 18px;
  justify-content: center;
  position: absolute;
    top: 14px;
    right: 14px;
  width: 18px;
`;

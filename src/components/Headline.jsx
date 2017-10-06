import React from 'react';
import Link from 'gatsby-link';
import styled, {keyframes} from 'styled-components';

const fadeRight = keyframes`
  from {
    left: -50px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
`;

const HeadlineWrapper = styled.div`
  align-items: center;
  display: flex;
  height: calc((100vh - 60px) / 2);

  @media screen and (orientation: landscape) {
    align-items: flex-end;
  }
  @media screen and (orientation: landscape) and (max-width: 900px) {
    height: calc((100vh - 40px) / 2);
  }
  @media screen and (orientation: landscape) and (min-width: 900px) {
    height: calc((100vh - 330px) / 2);
  } 
  @media screen and (min-width: 1000px) {
    height: calc((100vh - 270px) / 2);
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    height: calc((100vh - 330px) / 2);
  }
  @media screen and (orientation: portrait) and (min-height: 900px) {
    height: calc((100vh - 390px) / 2);
  }
`;
const Skills = styled.ul`
  color: #34495e;
  display: flex;
  flex-direction: column;
  font-family: 'Sofia Pro';
  font-size: 30px;
  font-weight: 600;
  letter-spacing: .01em;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    font-size: 46px;
    font-weight: 500;
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    font-size: 52px;
  }
  @media screen and (orientation: landscape) and (min-height: 1000px) {
    font-size: 58px;
  }
`;
const Skill = styled.li`
  animation: ${fadeRight} .4s ease;
  animation-delay: ${props => props.delay ? props.delay : '0s'};
  animation-fill-mode: both;
  flex-shrink: 1;
  line-height: 1em;
  margin-bottom: .4em;
  position: relative;


`;

const Headline = () => (
  <HeadlineWrapper>

    <Skills>
      <Skill delay='.5s'>Full-stack web developer.</Skill>
      <Skill delay='.6s'>Designer.</Skill>
      <Skill delay='.7s'>Startup founder.</Skill>
    </Skills>

  </HeadlineWrapper>
);

export default Headline;

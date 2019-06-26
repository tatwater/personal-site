import React from 'react';
import styled from 'styled-components';
import {keyframes} from 'styled-components';

const Animations = {
  bounce: keyframes`
    0% {
      transform: translate(0, -5px);
    }
    50% {
      transform: translate(0, 5px);
    }
    100% {
      transform: translate(0, -5px);
    }
  `,
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  loadHeadline: keyframes`
    from {
      left: -50px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  `,
  loadName: keyframes`
    from {
      padding: 0 8px 0 10px;
    }
    to {
      padding: 0 6px 0 0;
    }
  `,
  loadNameLink: keyframes`
    from {
      left: 5px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  `,
  loadTag: keyframes`
    from {
      left: -5px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  `,
}

const Breakpoints = {
  socialMediaSwitch: 'screen and (min-width: 760px) and (min-height: 600px)',
  beforeFirstFooterUnwrapWidth: 'screen and (max-width: 399px)',
  afterFirstFooterUnwrapWidth: 'screen and (min-width: 400px)',
  secondFooterUnwrapWidth: 'screen and (min-width: 900px)',
  firstFooterFontIncrease: 'screen and (min-width: 1000px)',
  secondFooterFontIncrease: 'screen and (min-width: 1200px) and (min-height: 600px)',
}

const ProjectsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: projects;

  @media screen and (orientation: landscape) and (min-width: 768px) {
    flex-direction: row;
  }
`;
const ProjectWrapper = styled.div`
  align-items: center;
  animation: ${Animations.fadeIn} .5s ease;
  animation-delay: .9s;
  animation-fill-mode: both;
  display: flex;
  flex-grow: 1;
  width: 100%;

  @media (hover: hover) {
    div:hover {
      & h3 {
        color: ${props => props.color ? props.color : '#34495e'};
      }
      & a {
        transform: translate(10px, 0);

        &::before {
          background: ${props => props.color ? props.color : '#34495e'};
          right: 28px;
          transform: scale(1);
        }
        &::after {
          color: ${props => props.color ? props.color : '#34495e'};
          margin-left: 12px;
        }
      }
    }
  }
`;
const Kicker = styled.h5`
  color: #34495e;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  letter-spacing: .01em;
  margin: 0 0 4px 0;

  @media screen and (min-width: 900px) {
    font-size: 18px;
  }
`;
const Title = styled.h3`
  color: #34495e;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
  letter-spacing: .01em;
  line-height: 1.1em;
  margin: 0 0 2px 0;
  transform: translate(-2px, 0);
  transition: color .2s ease;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media ${Breakpoints.socialMediaSwitch} {
    font-size: 36px;
  }
  @media ${Breakpoints.secondFooterUnwrapWidth} {
    font-size: 40px;
  }
  @media ${Breakpoints.secondFooterFontIncrease} {
    font-size: 44px;
  }
`;
const Subtitle = styled.h4`
  color: #34495e;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  letter-spacing: .01em;
  line-height: 1.2em;
  margin: 0;
  transform: translate(-1px, 0);

  @media ${Breakpoints.socialMediaSwitch} {
    font-size: 24px;
  }
  @media ${Breakpoints.secondFooterUnwrapWidth} {
    font-size: 28px;
  }
  @media ${Breakpoints.secondFooterFontIncrease} {
    font-size: 30px;
  }
`;
const VisitLink = styled.a`
  color: #34495e;
  display: inline-block;
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .05em;
  margin-top: 10px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: color .2s ease, transform .2s ease;

  &::before {
    content: '';
    display: block;
    height: 10px;
    opacity: .2;
    position: absolute;
      top: 4px;
      right: 22px;
      left: -1px;
    transform: scale(.95);
    transition: background .2s ease, right .2s ease, scale .2s ease;
    z-index: -1;

    @media ${Breakpoints.secondFooterUnwrapWidth} {
      top: 7px;
      height: 11px;
    }
    @media ${Breakpoints.secondFooterFontIncrease} {
      top: 8px;
      height: 12px;
    }
  }
  &::after {
    content: '→';
    font-family: 'Roboto';
    margin-left: 6px;
    transition: margin-left .2s ease;
  }

  @media ${Breakpoints.secondFooterUnwrapWidth} {
    font-size: 16px;
  }
  @media ${Breakpoints.secondFooterFontIncrease} {
    font-size: 18px;
  }
`;

const Projects = () => (
  <ProjectsWrapper>

  <ProjectWrapper color='#d8ab4e'>
    <div>
      <Kicker>Current</Kicker>
      <Title>
        <a href='https://cliniciq.ai' target='_blank' rel='noopener noreferrer'>Scope</a>
      </Title>
      <Subtitle>Chief Design Officer, CTO, and Co-founder</Subtitle>
      <VisitLink href='https://cliniciq.ai' target='_blank' rel='noopener noreferrer'>Visit</VisitLink>
    </div>
  </ProjectWrapper>

  <ProjectWrapper color='#2962ff'>
    <div>
      <Kicker>Previous</Kicker>
      <Title>
        <a href='https://fiberapp.io' target='_blank' rel='noopener noreferrer'>Fiber</a>
      </Title>
      <Subtitle>Co-founder & devops lead</Subtitle>
      <VisitLink href='https://fiberapp.io' target='_blank' rel='noopener noreferrer'>Visit</VisitLink>
    </div>
  </ProjectWrapper>

  </ProjectsWrapper>
);

export default Projects;

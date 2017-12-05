import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Animations, Breakpoints } from '../assets/helpers';


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
  font-family: 'acumin-pro';
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
  font-family: 'acumin-pro';
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
  font-family: 'acumin-pro';
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
  font-family: 'roboto-mono';
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
    font-family: 'acumin-pro';
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

      <ProjectWrapper color='#2962ff'>
        <div>
          <Kicker>Current</Kicker>
          <Title>
            <a href='https://fiberapp.io' target='_blank'>Fiber</a>
          </Title>
          <Subtitle>Co-founder & devops lead</Subtitle>
          <VisitLink href='https://fiberapp.io' target='_blank'>Visit</VisitLink>
        </div>
      </ProjectWrapper>

      <ProjectWrapper color='#f57d22'>
        <div>
          <Kicker>Previous</Kicker>
          <Title>
            <a href='https://oho.com' target='_blank'>OHO Interactive</a>
          </Title>
          <Subtitle>Full-stack developer</Subtitle>
          <VisitLink href='https://oho.com' target='_blank'>Visit</VisitLink>
        </div>
      </ProjectWrapper>

  </ProjectsWrapper>
);

export default Projects;

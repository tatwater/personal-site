import React from 'react';
import Link from 'gatsby-link';
import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProjectsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (orientation: landscape) {
    flex-direction: row;
    margin-bottom: 30px;
  }
  @media screen and (orientation: landscape) and (max-width: 900px) {
    margin-bottom: 10px;
  }
`;
const ProjectWrapper = styled.div`
  align-items: center;
  animation: ${fadeIn} .5s ease;
  animation-delay: .9s;
  animation-fill-mode: both;
  display: flex;
  height: calc((100vh - 280px) / 2);
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
          right: 26px;
          transform: scale(1);
        }
        &::after {
          color: ${props => props.color ? props.color : '#34495e'};
          margin-left: 10px;
        }
      }
    }
  }

  @media screen and (orientation: landscape) and (max-width: 900px) {
    height: calc(100vh - 180px);
  }
  @media screen and (orientation: portrait) and (min-height: 900px) {
    align-items: flex-start;
    height: calc((100vh - 330px) / 4);
  }
  @media screen and (orientation: landscape) and (min-width: 900px) {
    height: calc((100vh - 370px) / 2);
  }
  @media screen and (min-width: 1000px) {
    height: calc((100vh - 310px) / 2);
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    height: calc((100vh - 390px) / 2);
  }
`;
const Kicker = styled.h5`
  color: #34495e;
  font-family: 'acumin-pro';
  font-size: 16px;
  font-weight: 400;
  letter-spacing: .01em;
  margin: 0 0 4px 0;

  @media screen and (min-height: 600px) {
    margin: 0 0 6px 0;
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    font-size: 18px;
  }
  @media screen and (orientation: landscape) and (min-height: 1000px) {
    font-size: 20px;
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

  @media screen and (min-height: 600px) {
    font-size: 34px;
  }
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    font-size: 40px;
  }
  @media screen and (orientation: landscape) and (min-height: 1000px) {
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

  @media screen and (min-height: 600px) {
    font-size: 24px;
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    font-size: 28px;
  }
  @media screen and (orientation: landscape) and (min-height: 1000px) {
    font-size: 32px;
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

    @media screen and (orientation: portrait) and (min-height: 900px),
           screen and (orientation: landscape) and (min-width: 900px) {
      top: 7px;
      height: 11px;
    }
    @media screen and (orientation: landscape) and (min-height: 1000px) {
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

  @media screen and (min-height: 600px) {
    margin-top: 14px;
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    font-size: 16px;
  }
  @media screen and (orientation: landscape) and (min-height: 1000px) {
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

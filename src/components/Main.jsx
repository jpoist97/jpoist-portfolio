import React from 'react';
import styled from 'styled-components';
import Landing from './Landing/Landing';
import './Base.css';

const Container = styled.div`
   overflow: hidden;
   background-color: #FFFFFF;
`;

const FirstBackground = styled.div`
   position: absolute;
   height: 250px;
   width: 100%;
   top: calc(200vh - 250px);
   background-color: white;
   z-index: 0;
`;

const LandingSection = styled.section`
   height: 100vh;
   min-height: 500px;
   background-color: #1D3039;
   clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 8vw),
      0 100%
    );
`;

const AboutSection = styled.section`
   height: 100vh;
   min-height: 500px;
   background-color: #e2e2e2;
   clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 8vw),
      0 100%
    );
`;

const ExperienceSection = styled.section`
   height: 100vh;
   min-height: 500px;
   background-color: green;
`;

const ProjectsSection = styled.section`
   height: 100vh;
   min-height: 500px;
   background-color: blue;
`;

const ContactSection = styled.section`
   height: 100vh;
   min-height: 500px;
   background-color: black;
`;

export default () => (
  <Container>
    <FirstBackground />

    <LandingSection>
      <Landing />
    </LandingSection>

    <AboutSection name="About-Section" />
    <ExperienceSection name="Experience-Section" />
    <ProjectsSection name="Projects-Section" />
    <ContactSection name="Contact-Section" />
  </Container>
);

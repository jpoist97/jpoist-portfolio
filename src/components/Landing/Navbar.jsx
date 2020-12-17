import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavbarContainer = styled.div`
   height: 80px;
   background-color: #1D3039;
   box-shadow: -10px 6px 10px #1428317D;
`;

const LogoContainer = styled.div`
   float: left;
   display: flex;
   align-items: center;
   height: 80px;
   margin-left: 30px;
`;

const LinkContainer = styled.div`
   float: right;
   display: flex;
   align-items: center;
   margin-right: 50px;
   height: 80px;
`;

const LogoText = styled.h1`
   font-size: 50px !important;
   color: #FFFFFF;
   margin: 0;
`;

const StyledLink = styled(Link)`
   font-size: 20px;
   line-height: 24px;
   font-family: 'PT Sans', sans-serif;
   color: #FFFFFF;
   cursor: pointer;

   margin 0px 10px;

   &:hover {
      color: #C55046;
      text-decoration: none;
    }
`;

export default () => (
  <NavbarContainer>
    <LogoContainer>
      <LogoText>JP</LogoText>
    </LogoContainer>

    <LinkContainer>
      <StyledLink
        to="About-Section"
        smooth
        duration={500}
      >
        about
      </StyledLink>
      <StyledLink
        to="Experience-Section"
        smooth
        duration={550}
      >
        experience
      </StyledLink>
      <StyledLink
        to="Projects-Section"
        smooth
        duration={600}
      >
        projects
      </StyledLink>
      <StyledLink
        to="Contact-Section"
        smooth
        duration={650}
      >
        contact
      </StyledLink>
    </LinkContainer>
  </NavbarContainer>
);

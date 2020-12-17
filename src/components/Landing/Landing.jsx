import React from 'react';
import styled from 'styled-components';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import Navbar from './Navbar';

const LandingContainer = styled(Container)`
   padding-top: 30px;
`;

const TextCol = styled(Col)`
   padding-top: 15vh;
   padding-left: 80px;
`;

const TextWrapper = styled.div`
   max-width: 580px;
`;

const Portrait = styled.img`
   margin-top: 50px;
   width: 80%;
   height: auto;
   border-radius: 3px;
`;

const ConnectButton = styled.a`
   font-family: 'PT Sans', sans-serif;
   font-size: 18px;

   border-radius: 10px;
   border: none;
   padding: 15px 20px;
   background-color: #97C5DA;
   color: #FFFFFF;

   &:hover {
      background-color: #7BACC2;
      color: #FFFFFF;
      text-decoration: none;
   }
`;

export default () => (
  <div>
    <Navbar />
    <LandingContainer fluid>
      <Row>
        <TextCol xs={12} s={8} md={7} lg={7} xl={7}>
          <TextWrapper>
            <h4 style={{ color: '#D8CFCF' }}>HI MY NAME IS</h4>
            <h1 style={{ color: '#FFFFFF' }}>Justin Poist.</h1>
            <p style={{ color: '#FFFFFF', marginTop: 50, marginBottom: 30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus sem, posuere scelerisque sodales ac, tincidunt non velit. Nunc enim lorem, aliquet sed erat non, porta euismod arcu.</p>
            <ConnectButton href="https://www.linkedin.com/in/justin-poist/" target="_blank">CONNECT WITH ME!</ConnectButton>
          </TextWrapper>
        </TextCol>

        <Col xs={12} s={4} md={5} lg={5} xl={5}>
          <Portrait src={`${process.env.PUBLIC_URL}/Portfolio-Assets/Landing/landing-img.png`} />
        </Col>
      </Row>
    </LandingContainer>
  </div>
);

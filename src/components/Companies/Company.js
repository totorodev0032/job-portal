import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/Images/razorpay.png';

const Company = () => {
  return (
    <>
      <WhyWrapper>
        <WhyContainer>
          <Heading>Companies who trust Us</Heading>
          <CardContainer>
            <img src={Logo} alt="logo" />
            <img src={Logo} alt="logo" />
            <img src={Logo} alt="logo" />
          </CardContainer>
        </WhyContainer>
      </WhyWrapper>
    </>
  );
};

export default Company;

const WhyWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #edf6ff;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const WhyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 80%;

  @media (max-width: 496px) {
    padding-bottom: 5%;
  }
`;

const Heading = styled.h3`
  font-size: 27px;
  font-weight: 500;
  color: #303f60;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  justify-content: space-around;
`;

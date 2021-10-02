import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../assets/Images/heroImage.jpg';
const LandingPage = () => {
  return (
    <>
      <LandingWrapper>
        <LandingContainer>
          {/* left container */}
          <LandingLeft>
            <Heading>
              Welcome to{' '}
              <span>
                My<span className="blue">Jobs</span>
              </span>
            </Heading>
            <PrimaryButton>Get Started</PrimaryButton>
          </LandingLeft>

          {/* Right Image container */}
          <LandingRight>
            <img src={HeroImage} alt="Hero Job" />
          </LandingRight>
        </LandingContainer>
      </LandingWrapper>
    </>
  );
};

export default LandingPage;

const LandingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    248deg,
    rgba(48, 63, 96, 1) 0%,
    rgba(26, 37, 60, 1) 35%
  );

  @media (max-width: 496px) {
    height: auto;
  }
`;

const LandingContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;

  @media (max-width: 496px) {
    flex-direction: column;
    padding-bottom: 5%;
  }
`;

const LandingLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;
`;

const Heading = styled.h3`
  font-size: 50px;
  color: white;
  font-weight: 400;
  padding: 0 30% 0 0;
  letter-spacing: 2px;

  span {
    font-weight: 600;
  }

  .blue {
    color: #43afff;
  }

  @media (max-width: 496px) {
    padding: 0 10% 0 20px;
  }
`;

const LandingRight = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    margin-top: 40%;
    border-radius: 20px;
  }

  @media (max-width: 496px) {
    img {
      margin-top: 15%;
    }
  }
`;

const PrimaryButton = styled.button`
  display: flex;
  width: 148px;
  height: 46px;
  background-color: #43afff;
  color: white;
  border: none;
  ${'' /* margin: 0 0 0 0px; */}
  justify-content: center;
  align-items: center;
  font-size: 17px;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 496px) {
    margin: 0 10% 0 20px;
  }
`;

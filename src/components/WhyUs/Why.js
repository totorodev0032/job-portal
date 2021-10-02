import React from 'react';
import styled from 'styled-components';

const Why = () => {
  return (
    <>
      <WhyWrapper>
        <WhyContainer>
          <Heading>Why Us</Heading>
          <CardContainer>
            <Card>
              <CardHeading>Get more visibility</CardHeading>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Description>
            </Card>

            <Card>
              <CardHeading>Get more visibility</CardHeading>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Description>
            </Card>

            <Card>
              <CardHeading>Get more visibility</CardHeading>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </Description>
            </Card>
          </CardContainer>
        </WhyContainer>
      </WhyWrapper>
    </>
  );
};

export default Why;

const WhyWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
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
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 341px;
  height: 192px;
  background-color: #ffffff;
  margin-right: 20px;
  box-shadow: 0px 3px 6px #557da526;
  border-radius: 5px;

  @media (max-width: 496px) {
    margin-bottom: 10px;
  }
`;

const CardHeading = styled.h3`
  font-size: 22px;
  color: #43afff;
  font-weight: 500;
  padding: 0 50% 0 20px;
`;

const Description = styled.p`
  font-size: 15px;
  color: #303f60;
  font-weight: 400;
  padding: 0 20px 0 20px;
  margin-top: 0;
`;

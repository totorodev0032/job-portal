import React from 'react';
// import * as GrIcons from 'react-icons/gr';
import styled from 'styled-components';
import Header from '../Header/Header';
import JobBox from '../JobsCard/JobCard';

const Dashboard = () => {
  return (
    <>
      <Header />
      <DashboardWrapper>
        <DashboardContainer>
          <Heading>Jobs Posted by You</Heading>
        </DashboardContainer>
      </DashboardWrapper>

      <JobCardWrapper>
        <JobCardContainer>
          <JobBox />
          <JobBox />
        </JobCardContainer>
      </JobCardWrapper>
    </>
  );
};

export default Dashboard;

const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30vh;
  background: linear-gradient(
    248deg,
    rgba(48, 63, 96, 1) 0%,
    rgba(26, 37, 60, 1) 35%
  );
  justify-content: center;
  align-items: center;
`;

const DashboardContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  align-items: center;
`;

const Heading = styled.h3`
  font-size: 22px;
  color: #ffffff;
  font-weight: 500;
`;

const JobCardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  background-color: #edf6ff;
  justify-content: center;
  align-items: center;
`;

const JobCardContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  background: transparent;
  margin-top: -100px;
`;

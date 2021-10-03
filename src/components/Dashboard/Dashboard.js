import React, { useState } from 'react';
import { getPostedJobs } from '../../Services/main';
import styled from 'styled-components';
import Header from '../Header/Header';
import JobBox from '../JobsCard/JobCard';

const Dashboard = () => {
  // const [show, setShow] = React.useState(false);
  //   const handleClose = () => setShow(false);
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const [jobsData, setJobsData] = React.useState({
    data: [],
    message: 'Your posted jobs will show here!',
  });
  const [applicantData, setApplicantData] = React.useState({
    data: [],
    message: 'No Applicants',
  });
  React.useEffect(() => {
    getPostedJobs(userData.token)
      .then((data) => {
        if (!data.message) {
          console.log(data.data);
          setJobsData(data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userData.token]);
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
          {jobsData.data.map((job) => (
            <JobBox
              title={job.title}
              description={job.description}
              location={job.location}
            />
          ))}
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

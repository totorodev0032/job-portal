import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPostedJobs } from '../../Services/main';
import styled from 'styled-components';
import Header from '../Header/Header';
import JobBox from '../JobsCard/JobCard';
import { getOneJobApplicants } from '../../Services/main';
import { Modal } from 'react-bootstrap';
import './style.css';
import { FaAddressBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);

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

  const showApplicants = (arg) => {
    getOneJobApplicants(arg, userData.token)
      .then((data) => {
        console.log(data);
        setApplicantData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setShow(true);
  };
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
          {jobsData.data.map((job, index) => (
            <JobBox
              key={index}
              id={job.id}
              title={job.title}
              description={job.description}
              location={job.location}
              onAction={showApplicants}
            />
          ))}

          {jobsData.message && (
            <NoJobContainer>
              <FaAddressBook style={{ fontSize: '60px', color: 'gray' }} />
              <p>No Jobs Available</p>
              <Button
                as={Link}
                to="/postjob"
                style={{ textDecoration: 'none' }}
                className="link"
              >
                Post a Job
              </Button>
            </NoJobContainer>
          )}
        </JobCardContainer>
      </JobCardWrapper>

      <div className="modal_applicants">
        <Modal show={show} onHide={handleClose} className="modal_body">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignContent: 'center',
            }}
          >
            <h4 className="modal_heading m-0">Applicants for this job</h4>
            <span onClick={() => setShow(false)} style={{ cursor: 'pointer' }}>
              <i className="fa fa-times" aria-hidden="true">
                close
              </i>
            </span>
          </div>
          <div className="separator"></div>
          <p style={{ fontSize: 12, margin: '6px 0' }}>
            Total {applicantData.data ? applicantData.data.length : 0}{' '}
            applications
          </p>
          <div className="items_div p-2">
            {!applicantData.message && (
              <div className="row">
                {applicantData.data.map((element, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="item_body">
                      <div className="card_top_detail">
                        <span className="profile_icon">
                          {element.name.slice(0, 1)}
                        </span>
                        <div>
                          <p
                            style={{ fontSize: 16, fontWeight: 500, margin: 0 }}
                          >
                            {element.name}
                          </p>
                          <p style={{ fontSize: 14, margin: 0 }}>
                            {element.email}
                          </p>
                        </div>
                      </div>
                      <h5 style={{ fontSize: 13, margin: 0 }}>Skills</h5>
                      <p style={{ margin: 0, fontSize: 15 }}>
                        {element.skills}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {applicantData.message && (
              <div className="no_applicant_div text-center">
                <i className="fa fa-file-text fa-5x" aria-hidden="true"></i>
                <p className="pt-4">No applications available</p>
              </div>
            )}
          </div>
        </Modal>
      </div>
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

  .link {
    text-decoration: none;
    color: white;
  }

  .link:hover {
    color: white;
  }
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

const NoJobContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  background: transparent;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
  margin-left: 15%;
`;

const Button = styled.button`
  display: flex;
  border: none;
  background: #43afff;
  color: white;
  width: 130px;
  height: 35px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

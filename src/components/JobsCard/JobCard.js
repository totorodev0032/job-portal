import React from 'react';
import styled from 'styled-components';

const JobBox = () => {
  return (
    <>
      <JobCard>
        <h3 className="title">UI/UX Designer</h3>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt…
        </p>
        <CardFooter>
          <p>
            {/* <GrIcons.GrLocation /> */}
            location
          </p>
          <button className="btn">View Applications</button>
        </CardFooter>
      </JobCard>
    </>
  );
};

export default JobBox;

const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 172px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #557da526;
  border-radius: 5px;
  margin-right: 20px;

  .title {
    font-size: 20px;
    font-weight: 500;
    color: #303f60;
    padding: 0 10px 0 20px;
    margin-bottom: 0;
  }

  .description {
    font-size: 13px;
    font-weight: 400;
    padding: 0 10px 0 20px;
    margin-bottom: 0;
  }
`;

const CardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  p {
    padding: 0 0 0 20px;
    color: #303f60;
    font-size: 13px;
  }

  .btn {
    width: 130px;
    margin-right: 20px;
    height: 25px;
    background: #43afff33 0% 0% no-repeat padding-box;
    border-radius: 5px;
    border: none;
    font-size: 13px;
    cursor: pointer;
  }
`;

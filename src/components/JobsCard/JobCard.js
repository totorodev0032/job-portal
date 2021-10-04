import React from 'react';
import styled from 'styled-components';

const JobBox = ({ title, description, location, onAction, id }) => {
  return (
    <>
      <JobCard>
        <CardUp>
          <h3 className="title"> {title} </h3>
          <p className="description">{description}</p>
        </CardUp>
        <CardFooter>
          <p>
            {/* <GrIcons.GrLocation /> */}
            {location}
          </p>
          <button className="btn1" onClick={() => onAction(id)}>
            View Applications
          </button>
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
`;

const CardUp = styled.div`
  display: flex;
  height: 70%;
  width: 100%;
  flex-direction: column;

  .title {
    font-size: 20px;
    font-weight: 500;
    color: #303f60;
    padding: 20px 10px 0 20px;
    margin-bottom: 0;
  }

  .description {
    font-size: 13px;
    font-weight: 400;
    padding: 0 10px 0 20px;
    margin-bottom: 0;

    height: 50px;
    overflow: hidden;
    margin-top: 10px;
  }
`;

const CardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
 
  

  p {
    padding: 0 0 0 20px;
    color: #303f60;
    font-size: 13px;
  }

  .btn1 {
    display:flex
    width: 130px;
    margin-right: 20px;
    height: 25px;
    background: #43afff33 0% 0% no-repeat padding-box;
    border-radius: 5px;
    border: none;
    font-size: 13px;
    cursor: pointer;
    justify-content:center;
    align-items:center;
  }
`;

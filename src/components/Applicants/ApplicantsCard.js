import React from 'react';
import styled from 'styled-components';

const ApplicantsCard = () => {
  return (
    <>
      <Card>
        <CardContainer>
          <CardUp>
            <div className="avatar">E</div>
            <div className="information">
              <p>Nagendra Kumar</p>
              <p>nagu@ex.com</p>
            </div>
          </CardUp>
          <CardFooter>
            <p className="title">Skills</p>
            <p className="description">HTML, CSS</p>
          </CardFooter>
        </CardContainer>
      </Card>
    </>
  );
};

export default ApplicantsCard;

const Card = styled.div`
  display: flex;
  width: 290px;
  height: 170px;
  background-color: #fffff;
  border: 1px solid #303f6080;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
`;

const CardUp = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  ${'' /* background-color: red; */}

  .avatar {
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color: #d9efff;
    font-size: 20px;
    font-weight: 600;
    color: #303f60;
    justify-content: center;
    align-items: center;
    flex-basis: 30%;
    margin-right: 15px;
  }

  .information {
    display: flex;
    flex-basis: 70%;
    flex-direction: column;
    justify-content: center;

    p {
      margin-top: 0;
      margin-bottom: 0;
      color: #303f60;
      opacity: 0.8;
    }
  }
`;

const CardFooter = styled.div`
  display: flex;
  height: 40%;
  margin-top: 10px;
  flex-direction: column;

  .title {
    font-size: 14px;
    font-weight: 500;
    color: #303f60;
  }

  .description {
    font-size: 13px;
    font-weight: 400;
    color: #303f60;
    margin-top: 0;
  }
`;

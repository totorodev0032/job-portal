import React, { useEffect } from 'react';
import styled from 'styled-components';
import ApplicantsCard from './ApplicantsCard';
import { getOneJobApplicants } from '../../Services/main';

const ApplicantSection = () => {
  //   useEffect(() => {
  //     getOneJobApplicants(arg, userData.token)
  //       .then((data) => {
  //         console.log(data);
  //         setApplicantData(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     setShow(true);
  //   }, []);

  return (
    <>
      <ApplicantContainer>
        <ApplicantsCard />
      </ApplicantContainer>
    </>
  );
};

export default ApplicantSection;

const ApplicantContainer = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
`;

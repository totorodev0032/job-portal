import React from 'react';
import { useHistory } from 'react-router';
import { isEmpty } from 'lodash';
import { postJob } from '../../Services/main';
import styled from 'styled-components';
import '../../index.css';

const PostJob = () => {
  const [jobTitle, setJobTitle] = React.useState('');
  const [jobDescription, setJobDescription] = React.useState('');
  const [location, setLocation] = React.useState('');

  const history = useHistory();
  const [errors, setError] = React.useState({
    error: '',
  });
  const userData = JSON.parse(sessionStorage.getItem('userData'));

  const handleSubmit = (event) => {
    var jobData = {
      title: jobTitle,
      description: jobDescription,
      location: location,
    };
    const errorObj = {};
    if (!jobTitle) {
      errorObj.titleError = 'All fields are required';
    }
    if (!jobDescription) {
      errorObj.descriptionError = 'All fields are required';
    }

    if (!location) {
      errorObj.locationError = 'All fields are required';
    }
    if (isEmpty(errorObj)) {
      postJob(jobData, userData.token)
        .then((data) => {
          alert('success');
          history.push('/dashboard');
        })
        .catch((error) => {
          alert(error);
        });
    }
    setError(errorObj);
    event.preventDefault();
  };
  return (
    <>
      <PostJobWrapper>
        <PostJobContainer>
          <PostJobHeader>Post a Job</PostJobHeader>
          <FormContainer onSubmit={handleSubmit}>
            <label>Job Title</label>
            <input
              className={errors.titleError ? 'error' : null}
              type="text"
              value={jobTitle}
              placeholder="Enter Your Email"
              onChange={(event) => setJobTitle(event.target.value)}
            />

            <label>Job Description</label>
            <textarea
              className={errors.descriptionError ? 'error' : null}
              type="text"
              value={jobDescription}
              placeholder="Enter Description"
              onChange={(event) => setJobDescription(event.target.value)}
            />

            <label>Job Location</label>
            <input
              className={errors.locationError ? 'error' : null}
              type="text"
              value={location}
              placeholder="Enter Location"
              onChange={(event) => setLocation(event.target.value)}
            />
            {errors.descriptionError ? (
              <ErrorText>{errors.descriptionError}</ErrorText>
            ) : errors.titleError ? (
              <ErrorText>{errors.titleError}</ErrorText>
            ) : errors.locationError ? (
              <ErrorText>{errors.locationError}</ErrorText>
            ) : null}

            <ButtonWrapper>
              <Button type="submit">Submit</Button>
            </ButtonWrapper>
          </FormContainer>
        </PostJobContainer>
      </PostJobWrapper>
    </>
  );
};

export default PostJob;

const PostJobWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  background-color: #ffffff;
  box-shadow: 0px 30px 36px #557da526;
  border-radius: 20px;
  margin-top: 30%;
  justify-content: center;
  align-items: center;
`;

const PostJobContainer = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: column;
  margin-top: 20px;
`;

const PostJobHeader = styled.h3`
  font-size: 22px;
  color: #303f60;
  font-weight: 500;
  margin-bottom: 15px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 1px;
    color: #303f60;
    font-size: 15px;
    font-weight: 500;
  }

  input {
    height: 40px;
    margin-top: 10px;
    background: #e8e8e833 0% 0% no-repeat padding-box;
    border: 1px solid #c6c6c6;
    border-radius: 5px;
    padding: 0 0 0 10px;
    margin-bottom: 20px;
  }

  textarea {
    height: 80px;
    margin-top: 10px;
    background: #e8e8e833 0% 0% no-repeat padding-box;
    border: 1px solid #c6c6c6;
    border-radius: 5px;
    padding: 0 0 0 10px;
    margin-bottom: 20px;
  }

  input:focus {
    outline: none;
    border: 2px solid #43afff;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  width: 145px;
  height: 43px;
  border: none;
  background-color: #43afff;
  border: 1px solid #43afff;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

const ErrorText = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: -10px 0 5px auto;
  color: red;
`;

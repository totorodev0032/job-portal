import React from 'react';
import { useHistory } from 'react-router';
import { isEmpty } from 'lodash';
import styled from 'styled-components';
import { getPasswordResetToken } from '../../Services/reset';

const UserEmail = () => {
  const [userEmail, setUserEmail] = React.useState('');
  const history = useHistory();
  const [errors, setError] = React.useState({
    emailError: '',
  });
  const userData = JSON.parse(sessionStorage.getItem('userData'));

  const handleSubmit = (event) => {
    var emailData = {
      email: userEmail,
    };
    const errorObj = {};
    if (!userEmail) {
      errorObj.emailError = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userEmail)) {
      errorObj.emailError = 'Invalid Email Address';
    }

    if (isEmpty(errorObj)) {
      getPasswordResetToken(emailData)
        .then((data) => {
          alert('success');
          sessionStorage.setItem('userData', JSON.stringify(data.data));
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
      <ResetWrapper>
        <ResetContainer>
          <ResetHeader>Forgot Your Password</ResetHeader>
          <FormContainer onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={userEmail}
              placeholder="Enter Your Email"
              onChange={(event) => setUserEmail(event.target.value)}
            />
            {errors.emailError ? (
              <ErrorText>{errors.emailError}</ErrorText>
            ) : null}
            {/* <ErrorText>This field is mandatory</ErrorText> */}

            <ButtonWrapper>
              <Button type="submit">Submit</Button>
            </ButtonWrapper>
          </FormContainer>
        </ResetContainer>
      </ResetWrapper>
    </>
  );
};

export default UserEmail;

const ResetWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 300px;
  background-color: #ffffff;
  box-shadow: 0px 30px 36px #557da526;
  border-radius: 20px;
  margin-top: 30%;
  justify-content: center;
  align-items: center;
`;

const ResetContainer = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: column;
  margin-top: 20px;
`;

const ResetHeader = styled.h3`
  font-size: 22px;
  color: #303f60;
  font-weight: 500;
  margin-bottom: 25px;
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

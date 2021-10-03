import React from 'react';
import { useHistory } from 'react-router';
import { isEmpty } from 'lodash';
import { login } from '../../Services/main';
import styled from 'styled-components';

const ResetPassword = () => {
  const [userPassword, setUserPassword] = React.useState('');
  const [userConfirmPassword, setUserConfirmPassword] = React.useState('');

  const history = useHistory();
  const [errors, setError] = React.useState({
    emailError: '',
    passwordError: '',
  });
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  if (userData) {
    history.push('/dashboard');
  }
  const handleSubmit = (event) => {
    var loginData = {
      password: userPassword,
      confirmPassword: userConfirmPassword,
    };
    const errorObj = {};
    if (!userPassword) {
      errorObj.emailError = 'Password is required';
    }

    if (isEmpty(errorObj)) {
      login(loginData)
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
          <ResetHeader>Reset Your Password</ResetHeader>
          <FormContainer onSubmit={handleSubmit}>
            <label>Password</label>
            <input
              type="password"
              value={userPassword}
              placeholder="Enter Your Email"
              onChange={(event) => setUserPassword(event.target.value)}
            />
            {errors.emailError ? (
              <ErrorText>{errors.emailError}</ErrorText>
            ) : null}
            {/* <ErrorText>This field is mandatory</ErrorText> */}
            <label>Confirm Password</label>
            <input
              type="password"
              value={userConfirmPassword}
              placeholder="Enter Your Email"
              onChange={(event) => setUserConfirmPassword(event.target.value)}
            />
            <ButtonWrapper>
              <Button type="submit">Submit</Button>
            </ButtonWrapper>
          </FormContainer>
        </ResetContainer>
      </ResetWrapper>
    </>
  );
};

export default ResetPassword;

const ResetWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 400px;
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

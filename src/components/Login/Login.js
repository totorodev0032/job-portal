import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <>
      <LoginWrapper>
        <LoginContainer>
          <LoginHeader>Log In</LoginHeader>
          <FormContainer>
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email" />

            <label>Password</label>
            <input type="password" placeholder="Enter Your Password" />

            <ButtonWrapper>
              <Button>Login</Button>
            </ButtonWrapper>
          </FormContainer>
        </LoginContainer>
      </LoginWrapper>
    </>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 427px;
  background-color: #ffffff;
  box-shadow: 0px 30px 36px #557da526;
  border-radius: 20px;
  margin-top: 30%;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: column;
`;

const LoginHeader = styled.h3`
  font-size: 22px;
  color: #303f60;
  font-weight: 500;
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
    margin-bottom: 15px;
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
`;

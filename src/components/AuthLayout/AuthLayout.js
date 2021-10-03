import React from 'react';
import styled from 'styled-components';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ResetPassword from '../ResetPassword/ResetPassword';
import UserEmail from '../ResetPassword/UserEmail';

const AuthLayout = ({ value }) => {
  return (
    <>
      <AuthLayoutWrapper>
        <AuthLayoutContainer>
          {value == 'Login' ? (
            <Login />
          ) : value == 'Register' ? (
            <Register />
          ) : value == 'Reset' ? (
            <UserEmail />
          ) : value == 'Email' ? (
            <ResetPassword />
          ) : null}
        </AuthLayoutContainer>
      </AuthLayoutWrapper>
      <AuthLayoutBottom></AuthLayoutBottom>
    </>
  );
};

export default AuthLayout;

const AuthLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  background: linear-gradient(
    248deg,
    rgba(48, 63, 96, 1) 0%,
    rgba(26, 37, 60, 1) 35%
  );
  justify-content: center;
  align-items: center;
`;

const AuthLayoutContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const AuthLayoutBottom = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  background-color: #edf6ff;
  justify-content: center;
  align-items: center;
`;

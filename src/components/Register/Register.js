import React from 'react';
import { useHistory } from 'react-router';
import { isEmpty } from 'lodash';
import { register } from '../../Services/auth';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../index.css';

const Register = () => {
  const [userRole, setUserRole] = React.useState(0);
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [userSkills, setUserSkills] = React.useState('');
  const history = useHistory();
  const [errors, setError] = React.useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    skillError: '',
  });
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  if (userData) {
    history.push('/dashboard');
  }
  const handleSubmit = (event) => {
    var registerData = {
      userRole: userRole,
      name: userName,
      email: userEmail,
      password: userPassword,
      confirmPassword: confirmPassword,
      skills: userSkills,
    };
    const errorObj = {};

    if (!userName) {
      errorObj.nameError = 'Name is Required';
    }
    if (!userEmail) {
      errorObj.emailError = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userEmail)) {
      errorObj.emailError = 'Invalid Email Address';
    }
    if (!userPassword) {
      errorObj.passwordError = 'Password is required';
    } else if (!/^[A-Z0-9._%+-]{6,}$/i.test(userPassword)) {
      errorObj.passwordError = 'Password should be more than 6 letters';
    }
    if (!confirmPassword) {
      errorObj.confirmPasswordError = 'This is required';
    } else if (userPassword != confirmPassword) {
      errorObj.confirmPasswordError = 'Invalid Password';
    }

    if (isEmpty(errorObj)) {
      register(registerData)
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
      <RegisterWrapper>
        <RegisterContainer>
          <RegisterHeader>Register</RegisterHeader>
          <FormContainer onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              className={errors.nameError ? 'error' : null}
              type="text"
              value={userName}
              placeholder="Enter Your Full Name"
              onChange={(event) => setUserName(event.target.value)}
            />
            {errors.nameError ? (
              <ErrorText>{errors.nameError}</ErrorText>
            ) : null}

            <label>Email</label>
            <input
              className={errors.emailError ? 'error' : null}
              type="email"
              value={userEmail}
              placeholder="Enter Your Email"
              onChange={(event) => setUserEmail(event.target.value)}
            />
            {errors.emailError ? (
              <ErrorText>{errors.emailError}</ErrorText>
            ) : null}

            <PasswordContainer>
              <Left>
                <label>Password</label>
                <input
                  className={errors.passwordError ? 'error' : null}
                  type="password"
                  value={userPassword}
                  placeholder="Enter Your Password"
                  onChange={(event) => setUserPassword(event.target.value)}
                />
                {errors.passwordError ? (
                  <ErrorText>{errors.passwordError}</ErrorText>
                ) : null}
              </Left>

              <Right>
                <label>Confirm Password</label>
                <input
                  className={errors.confirmPasswordError ? 'error' : null}
                  type="password"
                  value={confirmPassword}
                  placeholder="Confirm Your Password"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
                {errors.confirmPasswordError ? (
                  <ErrorText>{errors.confirmPasswordError}</ErrorText>
                ) : null}
              </Right>
            </PasswordContainer>

            <label>Skills</label>
            <input
              type="text"
              value={userSkills}
              placeholder="Enter Your Skills"
              onChange={(event) => setUserSkills(event.target.value)}
            />

            <ButtonWrapper>
              <Button type="submit">Register</Button>
            </ButtonWrapper>
          </FormContainer>

          <RegisterFooter>
            Have an Account?{' '}
            <Link to="/login" className="link">
              Login
            </Link>
          </RegisterFooter>
        </RegisterContainer>
      </RegisterWrapper>
    </>
  );
};

export default Register;

const RegisterWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 600px;
  background-color: #ffffff;
  box-shadow: 0px 30px 36px #557da526;
  border-radius: 20px;
  margin-top: 30%;
  justify-content: center;
  align-items: center;

  .link {
    text-decoration: none;
  }
`;

const RegisterContainer = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: column;
  margin-top: 20px;
`;

const RegisterHeader = styled.h3`
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

  input:focus {
    outline: none;
    border: 2px solid #43afff;
  }
`;

const PasswordContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  input {
    width: 110%;
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

const RegisterFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`;

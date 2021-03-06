import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Drop from '../Dropdown/Dropdown';
const Header = () => {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Link to={userData ? '/dashboard' : '/'} className="link">
            <Heading>
              My<span className="blue">Jobs</span>
            </Heading>
          </Link>

          {userData ? (
            <RightDiv>
              <Link to="/postjob" className="link">
                <p>Post a Job</p>
              </Link>
              <Drop />
            </RightDiv>
          ) : (
            <Button as={Link} className="link" to="/register">
              Login/Signup
            </Button>
          )}
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    248deg,
    rgba(48, 63, 96, 1) 0%,
    rgba(26, 37, 60, 1) 35%
  );

  .link {
    text-decoration: none;
  }

  .link:hover {
    text-decoration: none;
    color: white;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  justify-content: space-between;
`;

const Heading = styled.h3`
  font-size: 25px;
  color: white;
  font-weight: 500;
  padding: 0 30% 0 0;
  letter-spacing: 2px;

  .blue {
    color: #43afff;
  }

  @media (max-width: 496px) {
    padding: 0 10% 0 20px;
  }
`;

const Button = styled.button`
  display: flex;
  border: 1px solid #43afff;
  width: 150px;
  height: 40px;
  background-color: #43afff33;
  color: white;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

const RightDiv = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-between;
  align-items: center;
  ${'' /* background-color: white; */}

  p {
    color: white;
  }
`;

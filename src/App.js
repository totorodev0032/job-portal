import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthLayout from './components/AuthLayout/AuthLayout';
import Company from './components/Companies/Company';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import HeaderEmpty from './components/Header/HeaderEmpty';
import LandingPage from './components/LandingPage/LandingPage';
import Why from './components/WhyUs/Why';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <LandingPage />
            <Why />
            <Company />
          </Route>

          <Route path="/login">
            <HeaderEmpty />
            <AuthLayout value="Login" />
          </Route>

          <Route path="/register">
            <HeaderEmpty />
            <AuthLayout value="Register" />
          </Route>

          <Route path="/resetPassword" exact>
            <HeaderEmpty />
            <AuthLayout value="Reset" />
          </Route>

          <Route path="/resetPassword/email">
            <HeaderEmpty />
            <AuthLayout value="Email" />
          </Route>

          <Route path="/postjob">
            <Header />
            <AuthLayout value="postjob" />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

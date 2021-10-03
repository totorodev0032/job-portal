import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthLayout from './components/AuthLayout/AuthLayout';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Why from './components/WhyUs/Why';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <LandingPage />
            <Why />
          </Route>

          <Route path="/login">
            <Header />
            <AuthLayout value="Login" />
          </Route>

          <Route path="/register">
            <Header />
            <AuthLayout value="Register" />
          </Route>

          <Route path="/resetPassword">
            <Header />
            <AuthLayout value="Reset" />
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

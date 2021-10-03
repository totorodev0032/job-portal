import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthLayout from './components/AuthLayout/AuthLayout';
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
            <AuthLayout />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

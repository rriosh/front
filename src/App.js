import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import Box from '@material-ui/core/Box';

import Login from './components/Login';
import Main from './components/Main';
import NoMatch from './components/NoMatch';
import Copyright from './components/Copyright';

const App = () => {

  let history = useHistory();
  const LogOut = () => {
    localStorage.clear();
    history.push('/');
  }

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return localStorage.getItem('auth') ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
          }
        }
      />
    );
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Main LogOut={LogOut} />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      <Box pt={4} style={{position: 'fixed', left: 0, bottom: 0, width: '100%', textAlign: 'center', padding: '15px'}}>
        <Copyright />
      </Box>
    </div>
  );
}

export default App;

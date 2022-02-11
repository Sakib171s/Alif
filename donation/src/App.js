import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './Auth';
import AuthRoute from './AuthRoute';

import Menubar from './Menubar';
import Home from './Home';
import Login from './Login';
import Register  from './Register';
import SinglePost from './SinglePost';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Menubar />
            <Route exact path = "/" component = {Home}/>
            <AuthRoute exact path = "/login" component={Login}/>
            <AuthRoute exact path = "/register" component={Register}/>
            <Route exact path ="/posts/:postId" component={SinglePost} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;

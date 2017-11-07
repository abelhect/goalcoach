import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'; //libraries to open the different pages
import {firebaseApp} from './firebase'; //hook to the database and auth
import {Provider} from 'react-redux'; //library to help redux pass the store down to the components of the app
import {createStore} from 'redux';  //library to help redux that holds the state tree
import {logUser} from './actions';  //main redux component that dispatches changes to the state store
import reducer from './reducers';   //main redux component

import App from './components/App.jsx';
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log('user has logged in or signed up', user);
    const {email} = user;
    store.dispatch(logUser(email));
    browserHistory.push('/app');
  } else {
    // console.log('user has logged out or still needs to log in');
    browserHistory.replace('/login');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  </Provider>, document.getElementById('root')
)

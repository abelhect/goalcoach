import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompletedGoalsList from './CompletedGoalsList';

class App extends Component {
  logOut(){
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
        <h3 >Goal Coach</h3>
          <AddGoal />
          <hr/>
          <GoalList />
          <hr/>
          <CompletedGoalsList />
          <hr/>
        <button
          className="btn btn-danger" style={{margin: '5px', marginTop: '30px'}}
          onClick={() => this.logOut()}>
          Log Out
        </button>
      </div>

    )
  }
}

function mapStateToProps(state){
  // console.log('state from App', state);
  return {}
}

export default connect(mapStateToProps, null)(App);

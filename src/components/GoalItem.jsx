import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completedGoalRef, goalRef} from '../firebase';

class GoalItem extends Component {

  completeGoal(){
    //add complete goals to the database.  new table ref in the database
    const {email} = this.props.user;
    const {title, serverkey} = this.props.goal;
    // console.log('title', title, 'email', email, 'serverkey', serverkey);
    completedGoalRef.push({email, title});
    //remove the completed goal from the goalref database
    goalRef.child(serverkey).remove();
  }

  render() {
    const {email, title} = this.props.goal;
    return (
      <div >
        <strong>{title}</strong>
        <span> submitted by <em>{email}</em></span>
        <button
          style={{margin: '5px'}}
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
          >Complete</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {user} = state;
  return {user}
}

export default connect(mapStateToProps, null)(GoalItem);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completedGoalRef} from '../firebase';
import {setCompletedGoals} from '../actions';

class CompletedGoalsList extends Component {
  componentDidMount() {
    completedGoalRef.on('value', snap => {
      let completedGoals = [];
      snap.forEach(completedGoal =>{
        const {email, title} = completedGoal.val();
        completedGoals.push({email, title});
        // console.log('completed goal', completedGoal);
      })
      this.props.setCompletedGoals(completedGoals);
    })
  }

  clearCompleted(){
    completedGoalRef.set([]);
  }

  render(){
    // console.log('this.props.completedGoals from CompletedGoalsList', this.props.completedGoals);
    return(
      <div>
        <h4 style={{margin: '5px'}}>Completed Goals List</h4>
        <ul >
          {this.props.completedGoals.map((completedGoal, index) => {
            const {title, email} = completedGoal;
            return (
              <div key={index} style={{margin: '5px'}}>
                <strong>{title}</strong>
                <span> completed by <em>{email}</em></span>
              </div>
            )
          })}
        </ul>
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}>
          Clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {completedGoals} = state;
  return {completedGoals}
}

export default connect(mapStateToProps, {setCompletedGoals})(CompletedGoalsList);

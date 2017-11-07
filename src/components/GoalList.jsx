import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goalRef} from '../firebase';  //import hook to the database
import {setGoals} from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component {
  componentDidMount(){
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        const {email, title} = goal.val();
        const serverkey = goal.key;
        goals.push({email, title, serverkey});
        // console.log('goal', goal);
      })
      this.props.setGoals(goals);
    })
  }

  render(){
    // console.log('this.props.goals from GoalList', this.props.goals);
    return(
      <div>
        <h4 style={{margin: '5px'}}>Goal List</h4>
        <ul>
          {
            this.props.goals.map((goal, index) => {
              return (
                <GoalItem key={index} goal={goal}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {goals} = state;
  return {goals}
}

export default connect(mapStateToProps, {setGoals}) (GoalList); //the second argument for connect is to bind actions

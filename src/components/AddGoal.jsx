import React, {Component} from 'react';
import {connect} from 'react-redux';  //connects the react app to the redux to mapStateToProps
import {goalRef} from '../firebase';  //hooks us to the firebase database

class AddGoal extends Component {
  constructor(props){
    super(props)
    this.state={
      title: '' //keep track of changes to the title of the goals
    }
  }

  addGoal(){  //pushes the new goal and the member states to the database
    console.log('this', this);
    const {title} = this.state;
    const {email} = this.props.user;
    goalRef.push({email, title});
  }

  render(){
    return(
      <div className="form-inline">
        <form className="form-group" style={{margin: '5px'}}>
          <input
            type="text"
            className="form-control"
            style={{marginRight: '5px'}}
            placeholder="Add a goal"
            onChange={event => this.setState({title: event.target.value})}
          />
          <button type="button"
            className="btn btn-success"
            onClick={() => this.addGoal()}>
              Add
            </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log('state from AddGoal', state);
  const {user} = state;
  return {user}
}

export default connect(mapStateToProps, null)(AddGoal);

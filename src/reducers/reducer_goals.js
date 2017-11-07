import {SET_GOALS} from '../constants'

export default (state = [], action) => {    //our state is an array in this case
  switch (action.type) {
    case SET_GOALS:
      const {goals} = action;
      return goals;
    default:
      return state;
  }
}

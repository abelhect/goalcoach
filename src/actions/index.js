import {LOGGED_IN, SET_GOALS, SET_COMPLETED_GOALS } from '../constants';

export function logUser(email){
  const action ={
    type: LOGGED_IN,
    email
  }
  return action;
}

export function setGoals(goals){
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}

export function setCompletedGoals(completedGoals){
  const action = {
    type: SET_COMPLETED_GOALS,
    completedGoals
  }
  return action;
}

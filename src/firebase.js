import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAnYnQWMCg5lk3ItN3J3OHEK9qjDvhacmc",
  authDomain: "goalcoach-56f9b.firebaseapp.com",
  databaseURL: "https://goalcoach-56f9b.firebaseio.com",
  projectId: "goalcoach-56f9b",
  storageBucket: "",
  messagingSenderId: "709050672011"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completedGoalRef = firebase.database().ref('completedGoals')

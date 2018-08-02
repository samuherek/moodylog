import * as types from './actionTypes';
import { auth, uidKey, isAuthenticated } from '../firebase';

export function signIn(user) {
  return {
    type: types.SIGN_IN,
    payload: {
      user
    }
  };
}

export function signOut() {
  return {
    type: types.SIGN_OUT
  };
}

// MIDDLEWARE
const authUserSignOut = dispatch => {
  auth.signOut().then(res => {
    localStorage.removeItem(uidKey);
    console.log('signing out', res);
    dispatch(signOut());
  });
};

export function startListeningToAuthChanges() {
  return function startListeningToAuthChangesThunk(dispatch, getState) {
    const localUser = localStorage.getItem(uidKey);

    auth.onAuthStateChanged(user => {
      console.log('user', user, auth.currentUser);
      if (user) {
        if (!localUser || localUser !== user) {
          localStorage.setItem(uidKey, user.uid);
        }
        // Sing in user
        dispatch(signIn({ email: user.email, uid: user.uid }));
      } else if (!user && isAuthenticated()) {
        authUserSignOut(dispatch);
      }
    });
  };
}

export function signOutUser() {
  return function signOutUserThunk(dispatch) {
    authUserSignOut(dispatch);
  };
}

import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function appReducer(state = initialState.auth, action) {
  switch (action.type) {
    case types.SIGN_IN: {
      const { user } = action.payload;
      return {
        ...state,
        email: user.email,
        uid: user.uid
      };
    }

    case types.SIGN_OUT:
      return {
        ...initialState.auth,
        fetchingData: false
      };

    // case types.RECEIVED_AUTH_TOKEN: {
    //   const { token } = action.payload;
    //   return {
    //     ...state,
    //     token
    //   };
    // }

    default:
      return state;
  }
}

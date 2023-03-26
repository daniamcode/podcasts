import actionTypes from '../actions/actionTypes';

const INITIAL = {
  showFlag: false
};

const flag = (state = INITIAL, action) => {
  switch (action.type) {
    case actionTypes.SET_FLAG:
      return {
        ...state,
        showFlag: action.payload
      };
    default:
      return state;
  }
};

export default flag
import actionTypes from '../actions/actionTypes';

const INITIAL = {podcastsList: {isLoading: false, error: false}, podcastsDetails: []}

const podcasts = (state = INITIAL, action = {}) => {
  switch(action.type) {
    case actionTypes.LOAD_PODCASTS:
      return {
        ...state,
        podcastsList: action.payload
      }
    default:
      return state
  }
}

export default podcasts


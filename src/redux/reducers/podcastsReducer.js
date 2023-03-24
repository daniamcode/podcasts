import actionTypes from '../actions/actionTypes';

const INITIAL = {podcastsList: {isLoading: false, error: false}, podcastsDetails: []}

const podcasts = (state = INITIAL, action = {}) => {
  switch(action.type) {
    case actionTypes.LOAD_PODCASTS:
      return {
        ...state,
        podcastsList: action.payload
      }
    case actionTypes.LOAD_PODCASTS_DETAILS:
      // const newState = structuredClone(state) // fails 
      const newState = {...state} // todo: use lodash' clonedeep
      const newPodcastsDetailsIndex = newState?.podcastsDetails?.findIndex(el => el?.id === action?.payload?.id)
      if(newPodcastsDetailsIndex && newPodcastsDetailsIndex !== -1) {
        newState.podcastsDetails[newPodcastsDetailsIndex] = action?.payload
      } else {
        newState.podcastsDetails.push(action?.payload)
      }
      return newState
    default:
      return state
  }
}

export default podcasts


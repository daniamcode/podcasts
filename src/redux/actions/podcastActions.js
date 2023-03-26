import actionTypes from "./actionTypes";

export const loadPodcasts = () => {
  return async function (dispatch) {
    let isLoading = true
    dispatch({
      type: actionTypes.LOAD_PODCASTS,
      payload: {
          isLoading
      }
    })      
    try {
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`);
      if (!response.ok) {
        const errorResponse = await response.text();
        throw new Error(errorResponse);
      }
      const data = await response.json();
      dispatch({
        type: actionTypes.LOAD_PODCASTS,
        payload: {
          response: data?.feed?.entry,
          isLoading: false,
          isError: false,
          timestamp: Date.now(),
        },
      })
  } catch (error) {
        console.error(error)
        isLoading = false
          dispatch({
              type: actionTypes.LOAD_PODCASTS,
              payload: {
                  error,
                  isLoading
              }
          })
      }  
  }
}

export const loadPodcastsDetails = ({podcastId}) => {
  return async function (dispatch) {
      let isLoading = true
      // dispatch({
      //   type: actionTypes.LOAD_PODCASTS_DETAILS,
      //   payload: {
      //       isLoading
      //   }
      // })
      try {
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=10`)}`)
          .then(response => {
            if (response.ok) return response.json()
            isLoading = false
            console.error(response)
              dispatch({
                type: actionTypes.LOAD_PODCASTS_DETAILS,
                payload: {
                    error: response,
                    isLoading
                }
              })
          })
          .then(data => {
            isLoading = false
            dispatch({
              type: actionTypes.LOAD_PODCASTS_DETAILS,
              payload: {
                id:podcastId,
                response: JSON.parse(data?.contents)?.results,
                isLoading,
                isError: false,
                timestamp: Date.now()
              }
            })
          })
    } catch (error) {
          console.error(error)
          isLoading = false
            dispatch({
                type: actionTypes.LOAD_PODCASTS_DETAILS,
                payload: {
                    error,
                    isLoading
                }
            })
        }  
    }
}

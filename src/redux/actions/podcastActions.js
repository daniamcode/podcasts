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
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`)
        .then(response => {
          if (response.ok) return response.json()
          isLoading = false
          console.error(response)
            dispatch({
              type: actionTypes.LOAD_PODCASTS,
              payload: {
                  error: response,
                  isLoading
              }
            })
        })
        .then(data => {
          isLoading = false
          dispatch({
            type: actionTypes.LOAD_PODCASTS,
            payload: {
                response: JSON.parse(data.contents).feed.entry,
                isLoading,
                timestamp: Date.now()
            }
          })
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

import podcastsReducer from './podcastsReducer';
import actionTypes from '../actions/actionTypes';

describe('Podcasts reducer', () => {
  const INITIAL = {podcastsList: {error: false, isLoading: false}, podcastsDetails: []}
  test('should handle no action', () => {
    expect(podcastsReducer()).toEqual(INITIAL);
  });
  

  test('should handle LOAD_PODCASTS', () => {
    let result = {podcastsList: {error: false, isLoading: false, results: {id: 1}}, podcastsDetails: []}
    
    expect(
      podcastsReducer(
        INITIAL,
        {
          type: actionTypes.LOAD_PODCASTS,
          payload: {error: false, isLoading: false, results: {id: 1}}
        },
      ),
    ).toEqual(
      result
    );
  })
})
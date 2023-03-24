import podcasts from './podcastsReducer'
import timer from './timerReducer'
import {
    combineReducers
} from 'redux'

const rootReducer = combineReducers({
    podcasts,
    timer
})

export default rootReducer
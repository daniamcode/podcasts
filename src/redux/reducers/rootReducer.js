import podcasts from './podcastsReducer'
import timer from './timerReducer'
import flag from './flagReducer'
import {
    combineReducers
} from 'redux'

const rootReducer = combineReducers({
    podcasts,
    timer,
    flag
})

export default rootReducer
import podcasts from './podcastsReducer'
import {
    combineReducers
} from 'redux'

const rootReducer = combineReducers({
    podcasts
})

export default rootReducer
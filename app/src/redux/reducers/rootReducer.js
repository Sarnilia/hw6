import { combineReducers } from 'redux'
import photosReducer from './photosReducers'
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  photos: photosReducer,
  filter: filterReducer,
})

export default rootReducer

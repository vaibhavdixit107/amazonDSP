import { combineReducers } from 'redux'
import updateResponses from './responseReducers'

const rootReducer = combineReducers({
  response: updateResponses,

})

export default rootReducer
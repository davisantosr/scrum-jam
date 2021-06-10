import { combineReducers } from 'redux'

import { reducer as medias } from '../modules/medias/reducer'

const RootReducer = (hist) => combineReducers({
  medias
})

export default RootReducer

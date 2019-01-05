/*
 * @Author: donger 
 */

import { combineReducers }  from 'redux'
import layoutReducer        from './layoutStore/reducer'
import userReducer          from './userStore/reducer';

export default combineReducers({
  layout: layoutReducer,
  user: userReducer
})

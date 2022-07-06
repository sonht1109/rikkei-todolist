import { combineReducers } from 'redux';
import { appReducer } from 'containers/App/store';
// [IMPORT NEW REDUCERS]

//pages
const rootReducer = combineReducers({
  app: appReducer,
  // [COMBINE NEW REDUCERS]
});

export default rootReducer;

import { combineReducers } from 'redux';
import { appReducer } from 'containers/App/store';
import { homeReducer } from 'containers/Home/store';
// [IMPORT NEW REDUCERS]

//pages
const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
  // [COMBINE NEW REDUCERS]
});

export default rootReducer;

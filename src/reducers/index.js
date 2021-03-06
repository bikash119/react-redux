import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,//short hand property name
  authors,
  ajaxCallInProgress
});

export default rootReducer;

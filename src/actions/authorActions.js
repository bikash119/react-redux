import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusAction';
export function loadAuthorSuccess(authors){
  debugger;
  return {
    type: types.LOAD_AUTHORS_SUCCESS, authors
  };
}

export function loadAuthors(){
  return function(dispath){
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(authors => {
      dispath(loadAuthorSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}

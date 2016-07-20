import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
export function loadAuthorSuccess(authors){
  debugger;
  return {
    type: types.LOAD_AUTHORS_SUCCESS, authors
  };
}

export function loadAuthors(){
  return function(dispath){
    return authorApi.getAllAuthors().then(authors => {
      dispath(loadAuthorSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}

import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusAction';
export function loadCoursesSuccess(courses){
  debugger;
  return {
    type: types.LOAD_COURSES_SUCCESS, courses //short hand property name
  };
}

export function createCourseSuccess(course){
  debugger;
  return {
    type: types.CREATE_COURSE_SUCCESS, course
  };
}

export function updateCourseSuccess(course){
  debugger;
  return {
    type: types.UPDATE_COURSE_SUCCESS, course
  };
}

export function loadCourses(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course){
  return function(dispatch, getState){
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

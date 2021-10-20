import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { app, appEpic } from './app';

export const rootEpic = combineEpics(appEpic);

export const rootReducer = combineReducers({
    app,
});

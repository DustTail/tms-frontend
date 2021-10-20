import { mapTo } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { LOAD, LOADED } from './actions';

const loadEpic = (action$) =>
    action$.pipe(ofType(LOAD), mapTo({ type: LOADED }));

export const appEpic = combineEpics(loadEpic);

import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { catchError } from 'rxjs';
import { app, appEpic } from './app';

export const rootEpic = (action$, store$, dependencies) =>
    combineEpics(appEpic)(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        }),
    );

export const rootReducer = combineReducers({
    app,
});

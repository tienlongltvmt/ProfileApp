import {combineReducers} from 'redux';

const allReducers = combineReducers({});

export type RootState = ReturnType<typeof allReducers>;

export {allReducers};

import { combineReducers } from 'redux';
import zoomReducer from './zoom';
import fromColorsReducer from './fromColors';
import toColorsReducer from './toColors';

export const rootReducer = combineReducers({
    zoom: zoomReducer,
    fromColors: fromColorsReducer,
    toColors: toColorsReducer
});
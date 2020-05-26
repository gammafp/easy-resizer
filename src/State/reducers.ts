import { combineReducers } from 'redux';
import zoomReducer from './zoom';
import images from './images';

export const rootReducer = combineReducers({
    zoom: zoomReducer,
    images,
});
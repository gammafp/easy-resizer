import { combineReducers } from 'redux';
import zoomReducer from './zoom';
import images from './images';
import contextMenu from './contextMenu';

export const rootReducer = combineReducers({
    zoom: zoomReducer,
    images,
    contextMenu
});
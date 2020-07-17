import { combineReducers } from 'redux';
import scale from './scale';
import images from './images';
import contextMenu from './contextMenu';

export const rootReducer = combineReducers({
    scale,
    images,
    contextMenu
});
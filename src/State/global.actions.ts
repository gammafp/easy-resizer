import { createAction } from '@reduxjs/toolkit';
import { ImagesType } from './images';

export const defaultZoomState = 100;
export const defaultColors = [];
export const defaultImages:ImagesType = [];

export const resetAllAction = createAction('reset_all');

import { createAction } from '@reduxjs/toolkit';

export const defaultZoomState = 100;
export const defaultColors = [];

export const resetAllAction = createAction('reset_all');
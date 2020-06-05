import { createAction } from '@reduxjs/toolkit';
import { ImagesType } from './images';
import { contextMenuType } from './contextMenu';

export const defaultZoomState = 100;
export const defaultColors = [];
export const defaultImages:ImagesType = [];
export const defaultContextMenuData: contextMenuType = {
    id: '0',
    x: 0,
    y: 0,
    active: false,
};


export const resetAllAction = createAction('reset_all');

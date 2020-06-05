import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultContextMenuData, resetAllAction } from '../global.actions';

export type contextMenuType = {
    id: string,
    x: number,
    y: number,
    active: boolean,
};

const initialState: contextMenuType = defaultContextMenuData;

const contextMenu = createSlice({
    name: 'contextMenu',
    initialState,
    reducers: {
        activateContextMenu: (state, action: PayloadAction<contextMenuType>) => action.payload,
        closeContextMenu: () => initialState,
        // Local reset (only for zoom)
        resetContextMenu: () => initialState,
    },
    extraReducers: {
        [resetAllAction.type]: () => initialState,
    },
});

export const { activateContextMenu, closeContextMenu } = contextMenu.actions;
export default contextMenu.reducer;

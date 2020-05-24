import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultZoomState, resetAllAction } from '../global.actions';

export type ZoomState = number;

const initialState: ZoomState = defaultZoomState;

const zoomSlice = createSlice({
    name: 'zoom',
    initialState,
    reducers: {
        setZoomAction: (state, action: PayloadAction<number>) => action.payload,
        // Local reset (only for zoom)
        resetZoom: () => defaultZoomState,
    },
    extraReducers: {
        [resetAllAction.type]: () => defaultZoomState,
    },
});

export const { setZoomAction, resetZoom } = zoomSlice.actions;
export * from './selectors';
export default zoomSlice.reducer;

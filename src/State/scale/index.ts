import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultScaleState, resetAllAction } from '../global.actions';

export type ScaleState = number;

const initialState: ScaleState = defaultScaleState;

const scaleSlice = createSlice({
    name: 'scale',
    initialState,
    reducers: {
        setScale: (state, action: PayloadAction<number>) => action.payload,
        // Local reset (only for zoom)
        resetZoom: () => initialState,
    },
    extraReducers: {
        [resetAllAction.type]: () => initialState,
    },
});

export const { setScale, resetZoom } = scaleSlice.actions;
export default scaleSlice.reducer;

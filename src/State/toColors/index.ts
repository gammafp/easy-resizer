import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultColors, resetAllAction } from '../global.actions';

export type ToColorsState = Array<string>;

const initialState: ToColorsState = defaultColors;

const ToColorsSlice = createSlice({
    name: 'toColors',
    initialState,
    reducers: {
        setToColors: (state, action: PayloadAction<Array<string>>) => action.payload,
        // Local reset (only for zoom)
        resetToColors: () => initialState,
    },
    extraReducers: {
        [resetAllAction.type]: () => initialState,
    },
});

export const { setToColors, resetToColors } = ToColorsSlice.actions;
export default ToColorsSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultColors, resetAllAction } from '../global.actions';

export type FromColorsState = Array<string>;

const initialState: FromColorsState = defaultColors;

const fromColorsSlice = createSlice({
    name: 'fromColors',
    initialState,
    reducers: {
        setFromColors: (state, action: PayloadAction<Array<string>>) => action.payload,
        // Local reset (only for zoom)
        resetFromColors: () => initialState,
    },
    extraReducers: {
        [resetAllAction.type]: () => initialState,
    },
});

export const { setFromColors, resetFromColors } = fromColorsSlice.actions;
export default fromColorsSlice.reducer;

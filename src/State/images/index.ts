import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultImages, resetAllAction } from '../global.actions';

export type ImagesType = Array<{
    id: string,
    name: string,
    width: number,
    height: number,
    origin: {x: number, y: number},
    src: string,
    changeName: boolean,
    active: boolean
}>;

export type ImagesDeleteType = {
    id: string
};

const initialState: ImagesType = defaultImages;

const images = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImages: (state, action: PayloadAction<ImagesType>) => {
            return [...state, ...action.payload];
        },
        deleteImage: (state, action: PayloadAction<ImagesDeleteType>) => {
            return state.filter((image) => action.payload.id !== image.id);
        },
        // Local reset (only for zoom)
        resetImages: () => initialState,
    },
    extraReducers: {
        [resetAllAction.type]: () => initialState,
    },
});

export const { setImages, resetImages, deleteImage} = images.actions;
export default images.reducer;

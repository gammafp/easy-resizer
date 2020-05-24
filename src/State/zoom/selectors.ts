import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../store';

const selectZoom = (state: AppState) => state.zoom;

export const selectZoomLevel = createSelector([selectZoom], (zoom) => zoom);

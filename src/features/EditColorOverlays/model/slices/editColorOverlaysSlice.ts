import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditColorOverlaysSchema } from '../types/OverlaysSchema.ts';
import { TColorOverlayId } from '../types/TColorOverlay.ts';

const initialState: EditColorOverlaysSchema = {
    colorOverlays: {
        4: { value: 0, opacity: 0.5, color1: 0, color2: 0 },
        5: { value: 0, opacity: 0.5, color1: 0, color2: null },
        8: { value: 0, opacity: 0.5, color1: 0, color2: null },
    },
};

const editColorOverlaysSlice = createSlice({
    name: 'editColorOverlays',
    initialState,
    reducers: {
        changeValue: (
            state,
            action: PayloadAction<Partial<Record<TColorOverlayId, number>>>,
        ) => {
            const [[key, value]] = Object.entries(action.payload);
            state.colorOverlays[key as TColorOverlayId] = {
                ...state.colorOverlays[key as TColorOverlayId],
                value,
            };
        },
        changeOpacity: (
            state,
            action: PayloadAction<Partial<Record<TColorOverlayId, number>>>,
        ) => {
            const [[key, opacity]] = Object.entries(action.payload);
            state.colorOverlays[key as TColorOverlayId] = {
                ...state.colorOverlays[key as TColorOverlayId],
                opacity,
            };
        },
        changeColor1: (
            state,
            action: PayloadAction<Partial<Record<TColorOverlayId, number>>>,
        ) => {
            const [[key, color1]] = Object.entries(action.payload);
            state.colorOverlays[key as TColorOverlayId] = {
                ...state.colorOverlays[key as TColorOverlayId],
                color1,
            };
        },
        changeColor2: (
            state,
            action: PayloadAction<Partial<Record<TColorOverlayId, number>>>,
        ) => {
            const [[key, color2]] = Object.entries(action.payload);
            state.colorOverlays[key as TColorOverlayId] = {
                ...state.colorOverlays[key as TColorOverlayId],
                color2,
            };
        },
    },
});

export const { reducer: editColorOverlaysReducer } = editColorOverlaysSlice;
export const { actions: editColorOverlaysActions } = editColorOverlaysSlice;

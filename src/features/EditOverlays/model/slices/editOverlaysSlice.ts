import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditOverlaysSchema } from '../types/OverlaysSchema.ts';
import { TOverlayId } from '../types/TOverlay.ts';

const initialState: EditOverlaysSchema = {
    overlays: {
        0: { value: 5, opacity: 0.5 },
        3: { value: 5, opacity: 0.5 },
        6: { value: 5, opacity: 0.5 },
        7: { value: 5, opacity: 0.5 },
        9: { value: 5, opacity: 0.5 },
        11: { value: 5, opacity: 0.5 },
    },
};

const editOverlaysSlice = createSlice({
    name: 'editOverlays',
    initialState,
    reducers: {
        changeValue: (
            state,
            action: PayloadAction<Partial<Record<TOverlayId, number>>>,
        ) => {
            const [[key, value]] = Object.entries(action.payload);
            state.overlays[key as TOverlayId] = {
                ...state.overlays[key as TOverlayId],
                value,
            };
        },
        changeOpacity: (
            state,
            action: PayloadAction<Partial<Record<TOverlayId, number>>>,
        ) => {
            const [[key, opacity]] = Object.entries(action.payload);
            state.overlays[key as TOverlayId] = {
                ...state.overlays[key as TOverlayId],
                opacity,
            };
        },
    },
});

export const { reducer: editOverlaysReducer } = editOverlaysSlice;
export const { actions: editOverlaysActions } = editOverlaysSlice;

import {
    EditFacialHairSchema,
    TFacialHair,
} from '../types/EditFacialHairSchema.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: EditFacialHairSchema = {
    facialHair: {
        facialHair: 29,
        facialHairColor1: 0,
        facialHairOpacity: 0.6,
    },
};

const editFacialHairSlice = createSlice({
    name: 'editFacialHair',
    initialState,
    reducers: {
        change: (
            state,
            action: PayloadAction<Partial<Record<keyof TFacialHair, number>>>,
        ) => {
            const [[key, value]] = Object.entries(action.payload);

            state.facialHair = { ...state.facialHair, [key]: value };
        },
    },
});

export const { reducer: editFacialHairReducer } = editFacialHairSlice;
export const { actions: editFacialHairActions } = editFacialHairSlice;

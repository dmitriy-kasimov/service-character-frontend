import { EditEyesSchema, TEyes } from '../types/EditEyesSchema.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: EditEyesSchema = {
    eyes: {
        eyesColor: 0,
        eyebrows: 0,
        eyebrowsColor1: 0,
    },
};

const editEyesSlice = createSlice({
    name: 'editEyes',
    initialState,
    reducers: {
        change: (
            state,
            action: PayloadAction<Partial<Record<keyof TEyes, number>>>,
        ) => {
            const [[key, value]] = Object.entries(action.payload);

            state.eyes = { ...state.eyes, [key]: value };
        },
    },
});

export const { reducer: editEyesReducer } = editEyesSlice;
export const { actions: editEyesActions } = editEyesSlice;

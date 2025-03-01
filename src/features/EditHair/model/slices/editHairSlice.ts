import { EditHairSchema, THair } from '../types/EditHairSchema.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: EditHairSchema = {
    hair: {
        hair: 0,
        hairColor2: 5,
        hairColor1: 1,
        eyebrowsColor1: 4,
        eyebrows: 0,
    },
};

const editHairSlice = createSlice({
    name: 'editHair',
    initialState,
    reducers: {
        change: (
            state,
            action: PayloadAction<Partial<Record<keyof THair, number>>>,
        ) => {
            const [[key, value]] = Object.entries(action.payload);

            state.hair = { ...state.hair, [key]: value };
        },
    },
});

export const { reducer: editHairReducer } = editHairSlice;
export const { actions: editHairActions } = editHairSlice;

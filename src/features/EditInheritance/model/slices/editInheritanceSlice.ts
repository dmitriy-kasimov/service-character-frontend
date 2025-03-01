import {
    EditInheritanceSchema,
    TInheritance,
} from '../types/EditInheritanceSchema.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: EditInheritanceSchema = {
    inheritance: {
        faceMother: 0,
        faceFather: 0,
        skinFather: 0,
        skinMother: 0,
        skinMix: 0.5,
        faceMix: 0.5,
    },
};

const editInheritanceSlice = createSlice({
    name: 'editInheritance',
    initialState,
    reducers: {
        change: (
            state,
            action: PayloadAction<Partial<Record<keyof TInheritance, number>>>,
        ) => {
            const [[key, value]] = Object.entries(action.payload);

            state.inheritance = { ...state.inheritance, [key]: value };
        },
    },
});

export const { reducer: editInheritanceReducer } = editInheritanceSlice;
export const { actions: editInheritanceActions } = editInheritanceSlice;

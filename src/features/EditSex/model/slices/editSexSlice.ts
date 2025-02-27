import { EditSexSchema } from '../types/EditSexSchema.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ESex } from '@/shared/types/ESex.ts';

const initialState: EditSexSchema = {
    sex: ESex.MALE,
};

const editSexSlice = createSlice({
    name: 'editSex',
    initialState,
    reducers: {
        change: (state, action: PayloadAction<ESex>) => {
            state.sex = action.payload;
        },
    },
});

export const { reducer: editSexReducer } = editSexSlice;
export const { actions: editSexActions } = editSexSlice;

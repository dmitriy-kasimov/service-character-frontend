import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { editSexReducer } from '@/features/EditSex';
import { editFaceFeaturesReducer } from '@/features/EditFaceFeatures';
import { editOverlaysReducer } from '@/features/EditOverlays';

export const store = configureStore({
    reducer: {
        editSex: editSexReducer,
        editFaceFeatures: editFaceFeaturesReducer,
        editOverlays: editOverlaysReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

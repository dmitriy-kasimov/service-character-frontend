import {
    EditFaceFeaturesSchema,
    TFaceFeatures,
} from '../types/EditFaceFeaturesSchema.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EFaceFeature } from '../types/EFaceFeature.ts';

const initialState: EditFaceFeaturesSchema = {
    faceFeatures: {
        [EFaceFeature.NoseWidth]: 0,
        [EFaceFeature.NosePeak]: 0,
        [EFaceFeature.NoseLength]: 0,
        [EFaceFeature.NoseBoneCurveness]: 0,
        [EFaceFeature.NoseTip]: 0,
        [EFaceFeature.NoseBoneTwist]: 0,
        [EFaceFeature.EyebrowUpDown]: 0,
        [EFaceFeature.EyebrowInOut]: 0,
        [EFaceFeature.CheekBones]: 0,
        [EFaceFeature.CheekSidewaysBoneSize]: 0,
        [EFaceFeature.CheekBonesWidth]: 0,
        [EFaceFeature.EyeOpening]: 0,
        [EFaceFeature.LipThickness]: 0,
        [EFaceFeature.JawBoneWidth]: 0,
        [EFaceFeature.JawBoneShape]: 0,
        [EFaceFeature.ChinBone]: 0,
        [EFaceFeature.ChinBoneLength]: 0,
        [EFaceFeature.ChinBoneShape]: 0,
        [EFaceFeature.ChinHole]: 0,
        [EFaceFeature.NeckThickness]: 0,
    },
};

const editFaceFeaturesSlice = createSlice({
    name: 'editFaceFeatures',
    initialState,
    reducers: {
        change: (state, action: PayloadAction<Partial<TFaceFeatures>>) => {
            state.faceFeatures = { ...state.faceFeatures, ...action.payload };
        },
    },
});

export const { reducer: editFaceFeaturesReducer } = editFaceFeaturesSlice;
export const { actions: editFaceFeaturesActions } = editFaceFeaturesSlice;

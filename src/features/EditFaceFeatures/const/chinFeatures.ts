import { EFaceFeature } from '../model/types/EFaceFeature.ts';
import { TFaceFeatures } from '../model/types/TFaceFeatures.ts';

export const chinFeatures: Partial<TFaceFeatures> = {
    [EFaceFeature.ChinBone]: {
        description: 'Chin Bone',
        from: 'Up',
        to: 'Down',
    },
    [EFaceFeature.ChinBoneLength]: {
        description: 'Chin Bone Length',
        from: 'Backward',
        to: 'Forward',
    },
    [EFaceFeature.ChinBoneShape]: {
        description: 'Chin Bone Shape',
        from: 'Pointed',
        to: 'Square',
    },
    [EFaceFeature.ChinHole]: {
        description: 'Chin Hole',
        from: 'Chin',
        to: 'Bum',
    },
};

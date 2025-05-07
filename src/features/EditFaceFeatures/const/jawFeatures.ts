import { EFaceFeature } from '../model/types/EFaceFeature.ts';
import { TFaceFeatures } from '../model/types/TFaceFeatures.ts';

export const jawFeatures: Partial<TFaceFeatures> = {
    [EFaceFeature.JawBoneWidth]: {
        description: 'Jaw Bone Width',
        from: 'Narrow',
        to: 'Wide',
    },
    [EFaceFeature.JawBoneShape]: {
        description: 'Jaw Bone Shape',
        from: 'Round',
        to: 'Square',
    },
    [EFaceFeature.LipThickness]: {
        description: 'Lip Thickness (Both)',
        from: 'Fat',
        to: 'Thin',
    },
};

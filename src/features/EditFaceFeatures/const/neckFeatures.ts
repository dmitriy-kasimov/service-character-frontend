import { EFaceFeature } from '../model/types/EFaceFeature.ts';
import { TFaceFeatures } from '../model/types/TFaceFeatures.ts';

export const neckFeatures: Partial<TFaceFeatures> = {
    [EFaceFeature.NeckThickness]: {
        description: 'Neck Thickness',
        from: 'Thin',
        to: 'Thick',
    },
};

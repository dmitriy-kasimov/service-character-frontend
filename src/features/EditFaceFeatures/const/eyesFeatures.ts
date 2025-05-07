import { EFaceFeature } from '../model/types/EFaceFeature.ts';
import { TFaceFeatures } from '../model/types/TFaceFeatures.ts';

export const eyesFeatures: Partial<TFaceFeatures> = {
    [EFaceFeature.EyebrowUpDown]: {
        description: 'Eyebrow',
        from: 'Up',
        to: 'Down',
    },
    [EFaceFeature.EyebrowInOut]: {
        description: 'Eyebrow',
        from: 'In',
        to: 'Out',
    },

    [EFaceFeature.EyeOpening]: {
        description: 'Eye Opening (Both)',
        from: 'Wide',
        to: 'Squinted',
    },
};

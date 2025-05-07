import { EFaceFeature } from '../model/types/EFaceFeature.ts';
import { TFaceFeatures } from '../model/types/TFaceFeatures.ts';

export const cheekFeatures: Partial<TFaceFeatures> = {
    [EFaceFeature.CheekBones]: {
        description: 'Cheek Bones',
        from: 'Up',
        to: 'Down',
    },
    [EFaceFeature.CheekSidewaysBoneSize]: {
        description: 'Cheek Sideways Bone Size',
        from: 'In',
        to: 'Out',
    },
    [EFaceFeature.CheekBonesWidth]: {
        description: 'Cheek Bones Width',
        from: 'Puffed',
        to: 'Gaunt',
    },
};

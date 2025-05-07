import { EFaceFeature } from '../model/types/EFaceFeature.ts';
import { TFaceFeatures } from '../model/types/TFaceFeatures.ts';

export const noseFeatures: Partial<TFaceFeatures> = {
    [EFaceFeature.NoseWidth]: {
        description: 'Nose Width',
        from: 'Thin',
        to: 'Wide',
    },
    [EFaceFeature.NosePeak]: {
        description: 'Nose Peak',
        from: 'Up',
        to: 'Down',
    },
    [EFaceFeature.NoseLength]: {
        description: 'Nose Length',
        from: 'Long',
        to: 'Short',
    },
    [EFaceFeature.NoseBoneCurveness]: {
        description: 'Nose Bone Curveness',
        from: 'Crooked',
        to: 'Curved',
    },
    [EFaceFeature.NoseTip]: { description: 'Nose Tip', from: 'Up', to: 'Down' },
    [EFaceFeature.NoseBoneTwist]: {
        description: 'Nose Bone Twist',
        from: 'Left',
        to: 'Right',
    },
};

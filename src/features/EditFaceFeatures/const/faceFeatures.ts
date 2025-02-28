import { EFaceFeature } from '../model/types/EFaceFeature.ts';
import { TDescriptionFaceFeature } from '../model/types/TDescriptionFaceFeature.ts';

export const faceFeatures: Record<EFaceFeature, TDescriptionFaceFeature> = {
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
    [EFaceFeature.EyeOpening]: {
        description: 'Eye Opening (Both)',
        from: 'Wide',
        to: 'Squinted',
    },
    [EFaceFeature.LipThickness]: {
        description: 'Lip Thickness (Both)',
        from: 'Fat',
        to: 'Thin',
    },
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
    [EFaceFeature.NeckThickness]: {
        description: 'Neck Thickness',
        from: 'Thin',
        to: 'Thick',
    },
};

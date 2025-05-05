import { EditFacialHair } from '@/features/EditFacialHair';

import FacialHairIcon from '../assets/facial-hair.svg?react';
import { TAppearanceFeature } from '@/shared/components/AppearanceFeature';

export const appearanceFeatures: TAppearanceFeature[] = [
    {
        label: 'Facial hair',
        icon: FacialHairIcon,
        description: <EditFacialHair />,
    },
];

import { EditFacialHair } from '@/features/EditFacialHair';

import HairIcon from '../assets/hair.svg?react';
import FacialHairIcon from '../assets/facial-hair.svg?react';
import { TAppearanceFeature } from '@/shared/components/AppearanceFeature';
import { EditHair } from '@/features/EditHair';

export const appearanceFeatures: TAppearanceFeature[] = [
    { label: 'Hair', icon: HairIcon, description: <EditHair /> },
    {
        label: 'Facial hair',
        icon: FacialHairIcon,
        description: <EditFacialHair />,
    },
];

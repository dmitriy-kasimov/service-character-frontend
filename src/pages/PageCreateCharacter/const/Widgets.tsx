import React, { ReactElement } from 'react';

import { EditSex } from '@/features/EditSex';
import { EditFaceFeatures } from '@/features/EditFaceFeatures';
import { EditOverlays } from '@/features/EditOverlays';
import { EditInheritance } from '@/features/EditInheritance';
import { EditHair } from '@/features/EditHair';
import { EditFacialHair } from '@/features/EditFacialHair';
import { EditEyes } from '@/features/EditEyes';
import { EditColorOverlays } from '@/features/EditColorOverlays';

import EyesIcon from '../assets/eyes.svg?react';
import FaceFeaturesIcon from '../assets/face-features.svg?react';
import HairIcon from '../assets/hair.svg?react';
import InheritanceIcon from '../assets/inheritance.svg?react';
import OverlaysIcon from '../assets/overlays.svg?react';
import SexIcon from '../assets/sex.svg?react';
import FacialHairIcon from '../assets/facial-hair.svg?react';

export const Widgets: {
    label: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    description: ReactElement;
}[] = [
    { label: 'Sex', icon: SexIcon, description: <EditSex /> },
    {
        label: 'Inheritance',
        icon: InheritanceIcon,
        description: <EditInheritance />,
    },
    { label: 'Hair', icon: HairIcon, description: <EditHair /> },
    { label: 'Eyes', icon: EyesIcon, description: <EditEyes /> },
    {
        label: 'Face features',
        icon: FaceFeaturesIcon,
        description: <EditFaceFeatures />,
    },
    { label: 'Overlays', icon: OverlaysIcon, description: <EditOverlays /> },
    {
        label: 'Color overlays',
        icon: OverlaysIcon,
        description: <EditColorOverlays />,
    },
    {
        label: 'Facial hair',
        icon: FacialHairIcon,
        description: <EditFacialHair />,
    },
];

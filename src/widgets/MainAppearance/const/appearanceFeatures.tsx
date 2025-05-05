import { EditSex } from '@/features/EditSex';
import { EditFaceFeatures } from '@/features/EditFaceFeatures';
import { EditOverlays } from '@/features/EditOverlays';
import { EditInheritance } from '@/features/EditInheritance';
import { EditEyes } from '@/features/EditEyes';
import { EditColorOverlays } from '@/features/EditColorOverlays';

import EyesIcon from '../assets/eyes.svg?react';
import FaceFeaturesIcon from '../assets/face-features.svg?react';
import InheritanceIcon from '../assets/inheritance.svg?react';
import OverlaysIcon from '../assets/overlays.svg?react';
import SexIcon from '../assets/sex.svg?react';
import { TAppearanceFeature } from '@/shared/components/AppearanceFeature';

export const appearanceFeatures: TAppearanceFeature[] = [
    { label: 'Sex', icon: SexIcon, description: <EditSex /> },
    {
        label: 'Inheritance',
        icon: InheritanceIcon,
        description: <EditInheritance />,
    },
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
];

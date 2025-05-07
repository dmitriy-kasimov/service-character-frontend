import { TFaceFeatures } from '../model/types/TFaceFeatures.ts';
import { cheekFeatures } from './cheekFeatures.ts';
import { chinFeatures } from './chinFeatures.ts';
import { jawFeatures } from './jawFeatures.ts';
import { eyesFeatures } from './eyesFeatures.ts';
import { neckFeatures } from './neckFeatures.ts';
import { noseFeatures } from './noseFeatures.ts';
import React, { VFC } from 'react';
import CheekIcon from '../assets/cheek.svg?react';

type TFeatures = 'cheek' | 'chin' | 'eyes' | 'jaw' | 'neck' | 'nose';
type TFeature = {
    features: Partial<TFaceFeatures>;
    description: string;
    icon: VFC<React.SVGProps<SVGSVGElement>>;
};
export const faceFeatures: Record<TFeatures, TFeature> = {
    cheek: {
        features: cheekFeatures,
        description: 'Cheek',
        icon: CheekIcon,
    },
    chin: {
        features: chinFeatures,
        description: 'Chin',
        icon: CheekIcon,
    },
    jaw: {
        features: jawFeatures,
        description: 'Jaw',
        icon: CheekIcon,
    },
    eyes: {
        features: eyesFeatures,
        description: 'Eyes',
        icon: CheekIcon,
    },
    neck: {
        features: neckFeatures,
        description: 'Neck',
        icon: CheekIcon,
    },
    nose: {
        features: noseFeatures,
        description: 'Nose',
        icon: CheekIcon,
    },
};

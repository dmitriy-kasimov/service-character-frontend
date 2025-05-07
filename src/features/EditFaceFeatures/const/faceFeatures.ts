import { TFaceFeatures } from '../model/types/TFaceFeatures.ts';
import { cheekFeatures } from './cheekFeatures.ts';
import { chinFeatures } from './chinFeatures.ts';
import { jawFeatures } from './jawFeatures.ts';
import { eyesFeatures } from './eyesFeatures.ts';
import { neckFeatures } from './neckFeatures.ts';
import { noseFeatures } from './noseFeatures.ts';
import React, { VFC } from 'react';
import CheekIcon from '../assets/cheek.svg?react';
import ChinIcon from '../assets/chin.svg?react';
import EyesIcon from '../assets/eyes.svg?react';
import JawIcon from '../assets/jaw.svg?react';
import NeckIcon from '../assets/neck.svg?react';
import NoseIcon from '../assets/nose.svg?react';

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
        icon: ChinIcon,
    },
    jaw: {
        features: jawFeatures,
        description: 'Jaw',
        icon: JawIcon,
    },
    eyes: {
        features: eyesFeatures,
        description: 'Eyes',
        icon: EyesIcon,
    },
    neck: {
        features: neckFeatures,
        description: 'Neck',
        icon: NeckIcon,
    },
    nose: {
        features: noseFeatures,
        description: 'Nose',
        icon: NoseIcon,
    },
};

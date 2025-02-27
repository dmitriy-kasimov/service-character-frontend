import { TAppearance } from '../model/types/TAppearance.ts';
import { ESex } from '@/shared/types/ESex';

export const DefaultAppearance: Record<ESex, TAppearance> = {
    [ESex.MALE]: {
        faceMother: 0,
        faceFather: 0,
        skinFather: 0,
        skinMother: 0,
        skinMix: 0.5,
        faceMix: 0.5,
        facialHair: 29,
        facialHairColor1: 0,
        eyebrows: 0,
        eyeColor: 3,
        //
        hair: 0,
        eyes: 5,
        eyebrowsColor1: 4,
        eyebrowsOpacity: 1,
        hairColor2: 5,
        hairColor1: 1,
        facialHairOpacity: 0.6,
        //
        faceFeatures: new Array(20).fill(0),
        overlays: {
            0: { value: 5, opacity: 0.5 },
            3: { value: 5, opacity: 0.5 },
            6: { value: 5, opacity: 0.5 },
            7: { value: 5, opacity: 0.5 },
            9: { value: 5, opacity: 0.5 },
            11: { value: 5, opacity: 0.5 },
        },
    },
    [ESex.FEMALE]: {
        faceMother: 45,
        faceFather: 33,
        skinFather: 45,
        skinMother: 45,
        skinMix: 0.5,
        faceMix: 0.5,
        facialHair: 29,
        facialHairColor1: 0,
        eyebrows: 0,
        eyeColor: 3,
        //
        hair: 20,
        eyes: 3,
        eyebrowsColor1: 0,
        eyebrowsOpacity: 1,
        hairColor2: 40,
        hairColor1: 4,
        facialHairOpacity: 0,
        faceFeatures: new Array(20).fill(0),
        overlays: {
            0: { value: 5, opacity: 0.5 },
            3: { value: 5, opacity: 0.5 },
            6: { value: 5, opacity: 0.5 },
            7: { value: 5, opacity: 0.5 },
            9: { value: 5, opacity: 0.5 },
            11: { value: 5, opacity: 0.5 },
        },
    },
};

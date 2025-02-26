import {
    TOpacityOverlayData,
    TOpacityOverlayId,
} from '../model/types/TOpacityOverlay.ts';

export const opacityOverlays: Record<TOpacityOverlayId, TOpacityOverlayData> = {
    0: {
        label: 'Blemish',
        min: 0,
        max: 23,
    },
    3: {
        label: 'Age',
        min: 0,
        max: 14,
    },
    6: {
        label: 'Complexion',
        min: 0,
        max: 11,
    },
    7: {
        label: 'Sun Damage',
        min: 0,
        max: 10,
    },
    9: {
        label: 'Freckles',
        min: 0,
        max: 17,
    },
    11: {
        label: 'Body blemish',
        min: 0,
        max: 11,
    },
};

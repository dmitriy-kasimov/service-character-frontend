import { TColorOverlayId } from '../model/types/TColorOverlay.ts';
import { TColorOverlayData } from '../model/types/TColorOverlayData.ts';

export const colorOverlaysData: Record<TColorOverlayId, TColorOverlayData> = {
    4: {
        label: 'Makeup',
        min: 0,
        max: 74,
        hasColor2: true,
    },
    5: {
        label: 'Blush',
        min: 0,
        max: 6,
        hasColor2: false,
    },
    8: {
        label: 'Lipstick',
        min: 0,
        max: 9,
        hasColor2: false,
    },
};

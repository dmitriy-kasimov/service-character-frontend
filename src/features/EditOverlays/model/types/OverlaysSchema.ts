import { TOverlayId, TOverlayOptions } from './TOverlay.ts';

export type EditOverlaysSchema = {
    overlays: Record<TOverlayId, TOverlayOptions>;
};

export type TColorOverlayId = '4' | '5' | '8';

export type TColorOverlayOptions = {
    value: number;
    opacity: number;
    color1: number;
    color2: number | null;
};
export type TColorOverlays = Record<TColorOverlayId, TColorOverlayOptions>;

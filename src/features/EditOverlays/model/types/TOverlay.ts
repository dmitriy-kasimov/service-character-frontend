export type TOverlayId = '0' | '3' | '6' | '7' | '9' | '11';

export type TOverlayOptions = { value: number; opacity: number };
export type TOverlays = Record<TOverlayId, TOverlayOptions>;

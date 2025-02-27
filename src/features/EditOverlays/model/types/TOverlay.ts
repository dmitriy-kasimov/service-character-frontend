export type TOverlayId = '0' | '3' | '6' | '7' | '9' | '11';

export type TOverlayData = {
    label: string;
    min: number;
    max: number;
};

export type TOverlayOptions = { value: number; opacity: number };
export type TEditorOverlay = Record<TOverlayId, TOverlayOptions>;

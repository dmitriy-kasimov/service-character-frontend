import { types } from 'sass';
import Color = types.Color;

type HeadBlendDataType = {
    ShapeFirstID: number;
    ShapeSecondID: number;
    ShapeThirdID: number;
    SkinFirstID: number;
    SkinSecondID: number;
    SkinThirdID: number;
    ShapeMix: number;
    SkinMix: number;
    ThirdMix: number;
};
type HeadBlendPaletteColorType = {
    id: number;
    Rgba: Color;
};
type FaceFeatureType = {
    index: number;
    scale: number;
};
type HeadOverlayType = {
    overlayID: number;
    index: number;
    opacity: number;
};
type HeadOverlayColorType = {
    overlayID: number;
    colorType: number;
    colorIndex: number;
    secondColorIndex: number;
};
type EyeColorType = {
    index: number;
};
type HairColorType = {
    colorID: number;
    highlightColorID: number;
};
export type AppearanceType = {
    HeadBlendData: HeadBlendDataType;
    HeadBlendPaletteColor: HeadBlendPaletteColorType;
    FaceFeature: FaceFeatureType;
    HeadOverlay: HeadOverlayType;
    HeadOverlayColor: HeadOverlayColorType;
    EyeColor: EyeColorType;
    HairColor: HairColorType;
};

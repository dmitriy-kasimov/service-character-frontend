import { EFaceFeature } from './EFaceFeature.ts';

export type TFaceFeatures = Record<EFaceFeature, number>;

export type EditFaceFeaturesSchema = {
    faceFeatures: TFaceFeatures;
};

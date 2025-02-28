import { EFaceFeature } from './EFaceFeature.ts';

export type EditFaceFeaturesSchema = {
    faceFeatures: Record<EFaceFeature, number>;
};

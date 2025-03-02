export { EditFaceFeatures } from './ui/EditFaceFeatures';
export {
    editFaceFeaturesReducer,
    editFaceFeaturesActions,
} from './model/slices/editFaceFeaturesSlice.ts';

export type { EditFaceFeaturesSchema } from './model/types/EditFaceFeaturesSchema';
export { getFaceFeatures } from './model/selectors/editFaceFeaturesSelectors.ts';
export type { TFaceFeatures } from './model/types/EditFaceFeaturesSchema.ts';

import { EditSexSchema } from '@/features/EditSex';
import { EditFaceFeaturesSchema } from '@/features/EditFaceFeatures';
import { EditOverlaysSchema } from '@/features/EditOverlays';

export type StateSchema = {
    editSex: EditSexSchema;
    editFaceFeatures: EditFaceFeaturesSchema;
    editOverlays: EditOverlaysSchema;
};

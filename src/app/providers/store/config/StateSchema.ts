import { EditSexSchema } from '@/features/EditSex';
import { EditFaceFeaturesSchema } from '@/features/EditFaceFeatures';
import { EditOverlaysSchema } from '@/features/EditOverlays';
import { EditInheritanceSchema } from '@/features/EditInheritance';

export type StateSchema = {
    editSex: EditSexSchema;
    editFaceFeatures: EditFaceFeaturesSchema;
    editOverlays: EditOverlaysSchema;
    editInheritance: EditInheritanceSchema;
};

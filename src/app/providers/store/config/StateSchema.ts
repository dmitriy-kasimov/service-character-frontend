import { EditSexSchema } from '@/features/EditSex';
import { EditFaceFeaturesSchema } from '@/features/EditFaceFeatures';
import { EditOverlaysSchema } from '@/features/EditOverlays';
import { EditInheritanceSchema } from '@/features/EditInheritance';
import { EditHairSchema } from '@/features/EditHair';
import { EditFacialHairSchema } from '@/features/EditFacialHair';
import { EditEyesSchema } from '@/features/EditEyes';
import { EditColorOverlaysSchema } from '@/features/EditColorOverlays';

export type StateSchema = {
    editSex: EditSexSchema;
    editFaceFeatures: EditFaceFeaturesSchema;
    editOverlays: EditOverlaysSchema;
    editInheritance: EditInheritanceSchema;
    editHair: EditHairSchema;
    editFacialHair: EditFacialHairSchema;
    editEyes: EditEyesSchema;
    editColorOverlays: EditColorOverlaysSchema;
};

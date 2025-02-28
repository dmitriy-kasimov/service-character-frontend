import { StateSchema } from '@/app/providers/store';

export const getFaceFeatures = (state: StateSchema) =>
    state.editFaceFeatures.faceFeatures;

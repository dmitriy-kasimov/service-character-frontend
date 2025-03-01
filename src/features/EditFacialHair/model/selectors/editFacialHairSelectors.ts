import { StateSchema } from '@/app/providers/store';

export const getFacialHair = (state: StateSchema) =>
    state.editFacialHair.facialHair;

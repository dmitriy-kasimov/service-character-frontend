import { StateSchema } from '@/app/providers/store';

export const getColorOverlays = (state: StateSchema) =>
    state.editColorOverlays.colorOverlays;

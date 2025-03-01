import { StateSchema } from '@/app/providers/store';

export const getOverlays = (state: StateSchema) => state.editOverlays.overlays;

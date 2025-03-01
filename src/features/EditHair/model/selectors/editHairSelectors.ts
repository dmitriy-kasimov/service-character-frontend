import { StateSchema } from '@/app/providers/store';

export const getHair = (state: StateSchema) => state.editHair.hair;

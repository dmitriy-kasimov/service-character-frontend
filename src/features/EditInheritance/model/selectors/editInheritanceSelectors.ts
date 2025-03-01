import { StateSchema } from '@/app/providers/store';

export const getInheritance = (state: StateSchema) =>
    state.editInheritance.inheritance;

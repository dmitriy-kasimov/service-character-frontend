import { TAppearance } from './TAppearance.ts';
import { ESex } from '@/shared/types/ESex';
import { EPreset } from '@/shared/types/EPreset';

export type TEditAppearance = {
    appearance: TAppearance;
    sex: ESex;
    preset: EPreset | null;
};

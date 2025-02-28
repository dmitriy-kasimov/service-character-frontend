import { FC } from 'react';
import { RadioGroup, RadioGroupOptionType } from '@project-1114/ui-kit';
import { editSexActions } from '../model/slices/editSexSlice.ts';
import { ESex } from '@/shared/types/ESex.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';

const options: RadioGroupOptionType<ESex>[] = [
    {
        value: ESex.MALE,
        description: 'Мужской',
        defaultChecked: true,
    },
    { value: ESex.FEMALE, description: 'Женский' },
];
export const EditSex: FC = () => {
    const dispatch = useAppDispatch();

    const handleChangeSex = (value: string) => {
        dispatch(editSexActions.change(+value as ESex));
    };

    return (
        <RadioGroup name={'sex'} onChange={handleChangeSex} options={options} />
    );
};

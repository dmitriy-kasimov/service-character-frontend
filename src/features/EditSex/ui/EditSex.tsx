import { FC, useEffect } from 'react';
import { RadioGroup, RadioGroupOptionType } from '@project-1114/ui-kit';
import { editSexActions } from '../model/slices/editSexSlice.ts';
import { ESex } from '@/shared/types/ESex.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';
import { useSelector } from 'react-redux';
import { getSex } from '../model/selectors/editSexSelectors.ts';

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

    const sex = useSelector(getSex);
    const handleChangeSex = (value: string) => {
        dispatch(editSexActions.change(+value as ESex));
    };

    useEffect(() => {
        triggerClientEvent<ESex>('f:c:editSex', sex);
    }, [sex]);

    return (
        <RadioGroup name={'sex'} onChange={handleChangeSex} options={options} />
    );
};

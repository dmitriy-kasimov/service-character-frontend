import { FC } from 'react';
import cls from './HairContainer.module.scss';
import { maleHair } from '../const/maleHair';
import { AppImage } from '@project-1114/ui-kit';
import { useSelector } from 'react-redux';
import { getSex } from '@/features/EditSex';
import { ESex } from '@/shared/types/ESex.ts';
import { femaleHair } from '../const/femaleHair.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { THair } from '..';
import { editHairActions } from '../model/slices/editHairSlice.ts';

export const HairContainer: FC = () => {
    const dispatch = useAppDispatch();
    const currentSex = useSelector(getSex);
    const hairSet = currentSex === ESex.MALE ? maleHair : femaleHair;

    const handleChangeParamHair = (param: keyof THair, value: number) => {
        dispatch(editHairActions.change({ [param]: value }));
    };

    return (
        <div className={cls.HairContainer}>
            {hairSet.map((hair, index) => (
                <div className={cls.imgWrapper}>
                    <AppImage
                        key={index}
                        src={hair.img}
                        alt={hair.label}
                        className={cls.img}
                        onClick={() => handleChangeParamHair('hair', index)}
                    />
                </div>
            ))}
        </div>
    );
};

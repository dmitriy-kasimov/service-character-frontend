import { FC, useEffect } from 'react';
import { Slider, VStack } from '@project-1114/ui-kit';
import { hairColors } from '@/shared/const/hairColors.ts';
import { facialHairData } from '../const/facialHairData.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { useSelector } from 'react-redux';
import { getFacialHair } from '../model/selectors/editFacialHairSelectors.ts';
import { TFacialHair } from '../model/types/EditFacialHairSchema.ts';
import { editFacialHairActions } from '../model/slices/editFacialHairSlice.ts';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';
import { AppearanceFeatureItem } from '@/shared/components/AppearanceFeatureItem';

export const EditFacialHair: FC = () => {
    const dispatch = useAppDispatch();
    const facialHair = useSelector(getFacialHair);

    const handleChangeFacialHairParam = (
        param: keyof TFacialHair,
        value: number,
    ) => {
        dispatch(editFacialHairActions.change({ [param]: value }));
    };

    useEffect(() => {
        triggerClientEvent<TFacialHair>('f:c:editFacialHair', facialHair);
    }, [facialHair]);

    return (
        <VStack gap={'s'}>
            <AppearanceFeatureItem
                title={'Facial hair'}
                slider={
                    <Slider
                        value={facialHair.facialHair}
                        onChange={(value) =>
                            handleChangeFacialHairParam('facialHair', value)
                        }
                        min={0}
                        max={facialHairData.length}
                        step={1}
                    />
                }
                from={'0'}
                to={`${facialHairData.length}`}
            />
            <AppearanceFeatureItem
                title={'Facial hair opacity'}
                slider={
                    <Slider
                        value={facialHair.facialHairOpacity}
                        onChange={(value) =>
                            handleChangeFacialHairParam(
                                'facialHairOpacity',
                                value,
                            )
                        }
                        min={0}
                        max={1.0}
                        step={0.1}
                    />
                }
                from={'0'}
                to={'1'}
            />
            <AppearanceFeatureItem
                title={'Facial Hair Color'}
                slider={
                    <Slider
                        value={facialHair.facialHairColor1}
                        onChange={(value) =>
                            handleChangeFacialHairParam(
                                'facialHairColor1',
                                value,
                            )
                        }
                        min={0}
                        max={hairColors.length}
                        step={1}
                    />
                }
                from={'0'}
                to={`${hairColors.length}`}
            />
        </VStack>
    );
};

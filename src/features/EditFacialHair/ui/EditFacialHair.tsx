import { FC } from 'react';
import { HStack, Slider, Text, VStack } from '@project-1114/ui-kit';
import { hairColors } from '@/shared/const/hairColors.ts';
import { facialHairData } from '../const/facialHairData.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { useSelector } from 'react-redux';
import { getFacialHair } from '../model/selectors/editFacialHairSelectors.ts';
import { TFacialHair } from '../model/types/EditFacialHairSchema.ts';
import { editFacialHairActions } from '../model/slices/editFacialHairSlice.ts';

export const EditFacialHair: FC = () => {
    const dispatch = useAppDispatch();
    const facialHair = useSelector(getFacialHair);

    const handleChangeFacialHairParam = (
        param: keyof TFacialHair,
        value: number,
    ) => {
        dispatch(editFacialHairActions.change({ [param]: value }));
    };

    return (
        <VStack gap={'s'}>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Facial hair</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={facialHair.facialHair}
                        onChange={(value) =>
                            handleChangeFacialHairParam('facialHair', value)
                        }
                        min={0}
                        max={facialHairData.length}
                        step={1}
                    />
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Facial hair opacity</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
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
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Facial Hair Color</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
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
                </HStack>
            </VStack>
        </VStack>
    );
};

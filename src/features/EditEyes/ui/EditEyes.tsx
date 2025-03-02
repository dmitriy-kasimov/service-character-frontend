import { FC, useEffect } from 'react';
import { HStack, Slider, Text, VStack } from '@project-1114/ui-kit';
import { eyebrows } from '../const/eyebrows.ts';
import { hairColors } from '@/shared/const/hairColors.ts';
import { useSelector } from 'react-redux';
import { getEyes } from '..';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { TEyes } from '../model/types/EditEyesSchema.ts';
import { editEyesActions } from '../model/slices/editEyesSlice.ts';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';

export const EditEyes: FC = () => {
    const eyes = useSelector(getEyes);
    const dispatch = useAppDispatch();

    const handleChangeEyesParam = (param: keyof TEyes, value: number) => {
        dispatch(editEyesActions.change({ [param]: value }));
    };

    useEffect(() => {
        triggerClientEvent<TEyes>('f:c:editEyes', eyes);
    }, [eyes]);

    return (
        <VStack gap={'s'}>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Eyes color</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={eyes.eyesColor}
                        onChange={(value) =>
                            handleChangeEyesParam('eyesColor', value)
                        }
                        min={0}
                        max={30}
                        step={1}
                    />
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Eyebrows</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={eyes.eyebrows}
                        onChange={(value) =>
                            handleChangeEyesParam('eyebrows', value)
                        }
                        min={0}
                        max={eyebrows.length}
                        step={1}
                    />
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Eyebrows color</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={eyes.eyebrowsColor1}
                        onChange={(value) =>
                            handleChangeEyesParam('eyebrowsColor1', value)
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

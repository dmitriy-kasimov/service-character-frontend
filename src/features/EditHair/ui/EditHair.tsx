import { FC, useEffect } from 'react';
import { HStack, Slider, Text, VStack } from '@project-1114/ui-kit';
import { ESex } from '@/shared/types/ESex.ts';

import { hairColors } from '@/shared/const/hairColors.ts';
import { maleHair } from '../const/maleHair.ts';
import { femaleHair } from '../const/femaleHair.ts';
import { eyebrows } from '../const/eyebrows.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { useSelector } from 'react-redux';
import { getHair } from '../model/selectors/editHairSelectors.ts';
import { THair } from '../model/types/EditHairSchema.ts';
import { editHairActions } from '../model/slices/editHairSlice.ts';
import { getSex } from '@/features/EditSex';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';

export const EditHair: FC = () => {
    const dispatch = useAppDispatch();
    const hair = useSelector(getHair);

    const handleChangeParamHair = (param: keyof THair, value: number) => {
        dispatch(editHairActions.change({ [param]: value }));
    };

    useEffect(() => {
        triggerClientEvent<THair>('f:c:editHair', hair);
    }, [hair]);

    const currentSex = useSelector(getSex);
    const haircutCollection = currentSex === ESex.MALE ? maleHair : femaleHair;
    const countHaircuts = haircutCollection.length;

    return (
        <VStack gap={'s'}>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Hair</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={hair.hair}
                        onChange={(value) =>
                            handleChangeParamHair('hair', value)
                        }
                        min={0}
                        max={countHaircuts}
                        step={1}
                    />
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Hair color 1</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={hair.hairColor1}
                        onChange={(value) =>
                            handleChangeParamHair('hairColor1', value)
                        }
                        min={0}
                        max={hairColors.length}
                        step={1}
                    />
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Hair color 2</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={hair.hairColor2}
                        onChange={(value) =>
                            handleChangeParamHair('hairColor2', value)
                        }
                        min={0}
                        max={hairColors.length}
                        step={1}
                    />
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Eyebrows</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={hair.eyebrows}
                        onChange={(value) =>
                            handleChangeParamHair('eyebrows', value)
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
                        value={hair.eyebrowsColor1}
                        onChange={(value) =>
                            handleChangeParamHair('eyebrowsColor1', value)
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

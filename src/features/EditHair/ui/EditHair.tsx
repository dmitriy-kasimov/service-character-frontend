import { FC, useEffect } from 'react';
import { HStack, Slider, Text, VStack } from '@project-1114/ui-kit';

import { hairColors } from '@/shared/const/hairColors.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { useSelector } from 'react-redux';
import { getHair } from '../model/selectors/editHairSelectors.ts';
import { THair } from '../model/types/EditHairSchema.ts';
import { editHairActions } from '../model/slices/editHairSlice.ts';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';
import { HairContainer } from './HairContainer.tsx';

export const EditHair: FC = () => {
    const dispatch = useAppDispatch();
    const hair = useSelector(getHair);

    const handleChangeParamHair = (param: keyof THair, value: number) => {
        dispatch(editHairActions.change({ [param]: value }));
    };

    useEffect(() => {
        triggerClientEvent<THair>('f:c:editHair', hair);
    }, [hair]);

    return (
        <VStack gap={'s'}>
            <HairContainer />
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
        </VStack>
    );
};

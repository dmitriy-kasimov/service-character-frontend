import { FC, useEffect } from 'react';
import { HStack, Slider, Text, VStack } from '@project-1114/ui-kit';
import { getInheritance } from '../model/selectors/editInheritanceSelectors.ts';
import { useSelector } from 'react-redux';
import { TInheritance } from '../model/types/EditInheritanceSchema.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { editInheritanceActions } from '../model/slices/editInheritanceSlice.ts';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';

export const EditInheritance: FC = () => {
    const inheritance = useSelector(getInheritance);
    const dispatch = useAppDispatch();

    const handleChangeInheritanceParam = (
        param: keyof TInheritance,
        value: number,
    ) => {
        dispatch(editInheritanceActions.change({ [param]: value }));
    };

    useEffect(() => {
        triggerClientEvent<TInheritance>('f:c:editInheritance', inheritance);
    }, [inheritance]);

    return (
        <VStack gap={'l'} align={'center'} max>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Face father</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={inheritance.faceFather}
                        onChange={(value) =>
                            handleChangeInheritanceParam('faceFather', value)
                        }
                        min={1}
                        max={45}
                        step={1}
                    />
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Skin father</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={inheritance.skinFather}
                        onChange={(value) =>
                            handleChangeInheritanceParam('skinFather', value)
                        }
                        min={1}
                        max={45}
                        step={1}
                    />
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Face mother</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={inheritance.faceMother}
                        onChange={(value) =>
                            handleChangeInheritanceParam('faceMother', value)
                        }
                        min={1}
                        max={45}
                        step={1}
                    />
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Skin mother</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Slider
                        value={inheritance.skinMother}
                        onChange={(value) =>
                            handleChangeInheritanceParam('skinMother', value)
                        }
                        min={1}
                        max={45}
                        step={1}
                    />
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Face mix</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Text size={'s'}>Father</Text>
                    <Slider
                        value={inheritance.faceMix}
                        onChange={(value) =>
                            handleChangeInheritanceParam('faceMix', value)
                        }
                        min={0}
                        max={1}
                        step={0.1}
                        showValue={false}
                    />
                    <Text size={'s'}>Mother</Text>
                </HStack>
            </VStack>
            <VStack gap={'xs'} align={'start'} max>
                <Text>Skin mix</Text>
                <HStack gap={'s'} align={'center'} justify={'center'} max>
                    <Text size={'s'}>Father</Text>
                    <Slider
                        value={inheritance.skinMix}
                        onChange={(value) =>
                            handleChangeInheritanceParam('skinMix', value)
                        }
                        min={0}
                        max={1}
                        step={0.1}
                        showValue={false}
                    />
                    <Text size={'s'}>Mother</Text>
                </HStack>
            </VStack>
        </VStack>
    );
};

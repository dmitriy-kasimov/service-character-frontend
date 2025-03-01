import { FC } from 'react';
import { HStack, Slider, Text, VStack } from '@project-1114/ui-kit';
import { TOverlayId } from '../model/types/TOverlay.ts';
import { overlaysData } from '../const/overlays.ts';
import { useSelector } from 'react-redux';
import { getOverlays } from '../model/selectors/editOverlaysSelectors.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { editOverlaysActions } from '../model/slices/editOverlaysSlice.ts';

export const EditOverlays: FC = () => {
    const overlays = useSelector(getOverlays);
    const dispatch = useAppDispatch();

    const handleChangeValue = (id: TOverlayId, value: number) => {
        dispatch(editOverlaysActions.changeValue({ [id]: value }));
    };
    const handleChangeOpacity = (id: TOverlayId, opacity: number) => {
        dispatch(editOverlaysActions.changeOpacity({ [id]: opacity }));
    };

    return (
        <VStack gap={'m'}>
            {Object.entries(overlaysData).map(([id, overlay]) => (
                <VStack gap={'s'} key={overlay.label}>
                    <Text>{overlay.label}</Text>
                    <HStack gap={'s'} align={'center'}>
                        <Text size={'s'}>value: </Text>
                        <Slider
                            value={overlays[id as TOverlayId].value}
                            onChange={(value) =>
                                handleChangeValue(id as TOverlayId, value)
                            }
                            min={overlay.min}
                            step={1}
                            max={overlay.max}
                        />
                    </HStack>
                    <HStack gap={'s'} align={'center'}>
                        <Text size={'s'}>opacity: </Text>
                        <Slider
                            value={overlays[id as TOverlayId].opacity}
                            onChange={(opacity) =>
                                handleChangeOpacity(id as TOverlayId, opacity)
                            }
                            min={0}
                            step={0.1}
                            max={1}
                        />
                    </HStack>
                </VStack>
            ))}
        </VStack>
    );
};

import { FC } from 'react';
import { HStack, Slider, Text, VStack } from '@project-1114/ui-kit';
import { TOverlayId } from '../model/types/TOverlay.ts';
import { overlays } from '../const/overlays.ts';

export const EditOverlays: FC = () => {
    return (
        <VStack gap={'m'}>
            {Object.entries(overlays).map(([id, overlay]) => (
                <VStack gap={'s'} key={overlay.label}>
                    <HStack gap={'s'} align={'center'}>
                        <Text>{overlay.label} value: </Text>
                        <Slider
                            value={
                                editor.appearance.opacityOverlays[
                                    id as TOverlayId
                                ].value
                            }
                            onChange={(value) =>
                                handleChangeOverlayOpacity(
                                    id as TOverlayId,
                                    'value',
                                    value,
                                )
                            }
                            min={overlay.min}
                            step={1}
                            max={overlay.max}
                        />
                    </HStack>
                    <HStack gap={'s'} align={'center'}>
                        <Text>{overlay.label} opacity: </Text>
                        <Slider
                            value={
                                editor.appearance.opacityOverlays[
                                    id as TOverlayId
                                ].opacity
                            }
                            onChange={(value) =>
                                handleChangeOverlayOpacity(
                                    id as TOverlayId,
                                    'opacity',
                                    value,
                                )
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

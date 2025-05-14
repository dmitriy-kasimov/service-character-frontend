import { FC, useEffect } from 'react';
import { Slider, VStack } from '@project-1114/ui-kit';
import { TOverlayId, TOverlays } from '../model/types/TOverlay.ts';
import { overlaysData } from '../const/overlays.ts';
import { useSelector } from 'react-redux';
import { getOverlays } from '../model/selectors/editOverlaysSelectors.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { editOverlaysActions } from '../model/slices/editOverlaysSlice.ts';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';
import { AppearanceFeatureItems } from '@/shared/components/AppearanceFeatureItems';

export const EditOverlays: FC = () => {
    const overlays = useSelector(getOverlays);
    const dispatch = useAppDispatch();

    const handleChangeValue = (id: TOverlayId, value: number) => {
        dispatch(editOverlaysActions.changeValue({ [id]: value }));
    };
    const handleChangeOpacity = (id: TOverlayId, opacity: number) => {
        dispatch(editOverlaysActions.changeOpacity({ [id]: opacity }));
    };

    useEffect(() => {
        triggerClientEvent<TOverlays>('f:c:editOverlays', overlays);
    }, [overlays]);

    return (
        <VStack gap={'m'}>
            {Object.entries(overlaysData).map(([id, overlay]) => (
                <AppearanceFeatureItems
                    key={id}
                    title={overlay.label}
                    params={[
                        {
                            label: 'value:',
                            slider: (
                                <Slider
                                    value={overlays[id as TOverlayId].value}
                                    onChange={(value) =>
                                        handleChangeValue(
                                            id as TOverlayId,
                                            value,
                                        )
                                    }
                                    min={overlay.min}
                                    step={1}
                                    max={overlay.max}
                                />
                            ),
                        },
                        {
                            label: 'opacity:',
                            slider: (
                                <Slider
                                    value={overlays[id as TOverlayId].opacity}
                                    onChange={(opacity) =>
                                        handleChangeOpacity(
                                            id as TOverlayId,
                                            opacity,
                                        )
                                    }
                                    min={0}
                                    step={0.1}
                                    max={1}
                                />
                            ),
                        },
                    ]}
                />
            ))}
        </VStack>
    );
};

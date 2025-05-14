import { FC, useEffect } from 'react';
import { Slider, VStack } from '@project-1114/ui-kit';
import { colorOverlaysData } from '../const/colorOverlaysData.ts';
import { useSelector } from 'react-redux';
import { getColorOverlays } from '../model/selectors/editColorOverlaysSelectors.ts';
import {
    TColorOverlayId,
    TColorOverlays,
} from '../model/types/TColorOverlay.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';
import { editColorOverlaysActions } from '../model/slices/editColorOverlaysSlice.ts';
import { AppearanceFeatureItems } from '@/shared/components/AppearanceFeatureItems';

export const EditColorOverlays: FC = () => {
    const countColorOverlay = Object.keys(colorOverlaysData).length;
    const overlays = useSelector(getColorOverlays);
    const dispatch = useAppDispatch();

    const handleChangeValue = (id: TColorOverlayId, value: number) => {
        dispatch(editColorOverlaysActions.changeValue({ [id]: value }));
    };
    const handleChangeOpacity = (id: TColorOverlayId, opacity: number) => {
        dispatch(editColorOverlaysActions.changeOpacity({ [id]: opacity }));
    };
    const handleChangeColor1 = (id: TColorOverlayId, color1: number) => {
        dispatch(editColorOverlaysActions.changeColor1({ [id]: color1 }));
    };
    const handleChangeColor2 = (id: TColorOverlayId, color2: number) => {
        dispatch(editColorOverlaysActions.changeColor2({ [id]: color2 }));
    };

    useEffect(() => {
        triggerClientEvent<TColorOverlays>('f:c:editColorOverlays', overlays);
    }, [overlays]);

    return (
        <VStack gap={'m'}>
            {Object.entries(colorOverlaysData).map(([id, overlay]) => (
                <AppearanceFeatureItems
                    key={id}
                    title={overlay.label}
                    params={[
                        {
                            label: 'value:',
                            slider: (
                                <Slider
                                    value={
                                        overlays[id as TColorOverlayId].value
                                    }
                                    onChange={(value) =>
                                        handleChangeValue(
                                            id as TColorOverlayId,
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
                                    value={
                                        overlays[id as TColorOverlayId].opacity
                                    }
                                    onChange={(opacity) =>
                                        handleChangeOpacity(
                                            id as TColorOverlayId,
                                            opacity,
                                        )
                                    }
                                    min={0}
                                    step={0.1}
                                    max={1}
                                />
                            ),
                        },
                        {
                            label: 'color 1:',
                            slider: (
                                <Slider
                                    value={
                                        overlays[id as TColorOverlayId].color1
                                    }
                                    onChange={(color1) =>
                                        handleChangeColor1(
                                            id as TColorOverlayId,
                                            color1,
                                        )
                                    }
                                    min={0}
                                    step={1}
                                    max={countColorOverlay}
                                />
                            ),
                        },
                        {
                            label: overlay.hasColor2 ? 'color 2:' : '',
                            slider: overlay.hasColor2 ? (
                                <Slider
                                    value={
                                        overlays[id as TColorOverlayId]
                                            .color2 || 0
                                    }
                                    onChange={(color2) =>
                                        handleChangeColor2(
                                            id as TColorOverlayId,
                                            color2,
                                        )
                                    }
                                    min={0}
                                    step={1}
                                    max={countColorOverlay}
                                />
                            ) : (
                                <></>
                            ),
                        },
                    ]}
                />
            ))}
        </VStack>
    );
};

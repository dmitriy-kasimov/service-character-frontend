import { FC, useState } from 'react';
import { Card, VStack, Text, HStack, Slider } from '@tr271v0r/ui-tool-kit';
import { AppearanceType } from '@/shared/types/appearance.type.ts';
import { types } from 'sass';
import Color = types.Color;

export const EditAppearance: FC = () => {
    const initialState: AppearanceType = {
        HeadBlendData: {
            ShapeFirstID: 0,
            ShapeMix: 0,
            ShapeSecondID: 0,
            ShapeThirdID: 0,
            SkinFirstID: 0,
            SkinMix: 0,
            SkinSecondID: 0,
            SkinThirdID: 0,
            ThirdMix: 0,
        },
        HeadBlendPaletteColor: {
            rgba: new Color(0, 0, 0, 0),
            id: 0,
        },
        FaceFeature: {
            index: 0,
            scale: 0,
        },
        HeadOverlay: {
            index: 0,
            overlayID: 0,
            opacity: 0,
        },
        HeadOverlayColor: {
            overlayID: 0,
            colorIndex: 0,
            colorType: 0,
            secondColorIndex: 0,
        },
        EyeColor: {
            index: 0,
        },
        HairColor: {
            colorID: 0,
            highlightColorID: 0,
        },
    };

    const [appearance, setAppearance] = useState<AppearanceType>(initialState);
    return (
        <Card contentMargin={'m'}>
            <VStack>
                <Card variant={'outlined'}>
                    <VStack gap={'s'}>
                        <Text size={'xl'}>HeadBlendData</Text>
                        <HStack gap={'s'}>
                            <Text>ShapeFirstID</Text>
                            <Slider
                                value={appearance.HeadBlendData.ShapeFirstID}
                                onChange={(value) =>
                                    setAppearance({
                                        ...appearance,
                                        HeadBlendData: {
                                            ...appearance.HeadBlendData,
                                            ShapeFirstID: value,
                                        },
                                    })
                                }
                                min={0}
                                max={100}
                                step={5}
                            />
                        </HStack>

                        <HStack gap={'s'}>
                            <Text>ShapeSecondID</Text>
                            <Slider
                                value={appearance.HeadBlendData.ShapeSecondID}
                                onChange={(value) =>
                                    setAppearance({
                                        ...appearance,
                                        HeadBlendData: {
                                            ...appearance.HeadBlendData,
                                            ShapeSecondID: value,
                                        },
                                    })
                                }
                                min={0}
                                max={100}
                                step={5}
                            />
                        </HStack>

                        <HStack gap={'s'}>
                            <Text>ShapeThirdID</Text>
                            <Slider
                                value={appearance.HeadBlendData.ShapeThirdID}
                                onChange={(value) =>
                                    setAppearance({
                                        ...appearance,
                                        HeadBlendData: {
                                            ...appearance.HeadBlendData,
                                            ShapeThirdID: value,
                                        },
                                    })
                                }
                                min={0}
                                max={100}
                                step={5}
                            />
                        </HStack>

                        <HStack gap={'s'}>
                            <Text>SkinFirstID</Text>
                            <Slider
                                value={appearance.HeadBlendData.SkinFirstID}
                                onChange={(value) =>
                                    setAppearance({
                                        ...appearance,
                                        HeadBlendData: {
                                            ...appearance.HeadBlendData,
                                            SkinFirstID: value,
                                        },
                                    })
                                }
                                min={0}
                                max={100}
                                step={5}
                            />
                        </HStack>

                        <HStack gap={'s'}>
                            <Text>SkinSecondID</Text>
                            <Slider
                                value={appearance.HeadBlendData.SkinSecondID}
                                onChange={(value) =>
                                    setAppearance({
                                        ...appearance,
                                        HeadBlendData: {
                                            ...appearance.HeadBlendData,
                                            SkinSecondID: value,
                                        },
                                    })
                                }
                                min={0}
                                max={100}
                                step={5}
                            />
                        </HStack>

                        <HStack gap={'s'}>
                            <Text>SkinThirdID</Text>
                            <Slider
                                value={appearance.HeadBlendData.SkinThirdID}
                                onChange={(value) =>
                                    setAppearance({
                                        ...appearance,
                                        HeadBlendData: {
                                            ...appearance.HeadBlendData,
                                            SkinThirdID: value,
                                        },
                                    })
                                }
                                min={0}
                                max={100}
                                step={5}
                            />
                        </HStack>

                        <HStack gap={'s'}>
                            <Text>ShapeMix</Text>
                            <Slider
                                value={appearance.HeadBlendData.ShapeMix}
                                onChange={(value) =>
                                    setAppearance({
                                        ...appearance,
                                        HeadBlendData: {
                                            ...appearance.HeadBlendData,
                                            ShapeMix: value,
                                        },
                                    })
                                }
                                min={0}
                                max={1}
                                step={0.1}
                            />
                        </HStack>

                        <HStack gap={'s'}>
                            <Text>SkinMix</Text>
                            <Slider
                                value={appearance.HeadBlendData.SkinMix}
                                onChange={(value) =>
                                    setAppearance({
                                        ...appearance,
                                        HeadBlendData: {
                                            ...appearance.HeadBlendData,
                                            SkinMix: value,
                                        },
                                    })
                                }
                                min={0}
                                max={1}
                                step={0.1}
                            />
                        </HStack>

                        <HStack gap={'s'}>
                            <Text>ThirdMix</Text>
                            <Slider
                                value={appearance.HeadBlendData.ThirdMix}
                                onChange={(value) =>
                                    setAppearance({
                                        ...appearance,
                                        HeadBlendData: {
                                            ...appearance.HeadBlendData,
                                            ThirdMix: value,
                                        },
                                    })
                                }
                                min={0}
                                max={1}
                                step={0.1}
                            />
                        </HStack>
                    </VStack>
                </Card>

                <Card variant={'outlined'}>
                    <VStack gap={'s'}>
                        <Text size={'xl'}>HeadBlendPaletteColor</Text>
                        <HStack gap={'s'}>
                            <Text>rgba</Text>
                            <Slider
                                value={appearance.HeadBlendPaletteColor.rgba}
                                onChange={(value) =>
                                    setAppearance({
                                        ...appearance,
                                        HeadBlendPaletteColor: {
                                            ...appearance.HeadBlendPaletteColor,
                                            rgba: value,
                                        },
                                    })
                                }
                                min={0}
                                max={100}
                                step={5}
                            />
                        </HStack>
                    </VStack>
                </Card>
            </VStack>
        </Card>
    );
};

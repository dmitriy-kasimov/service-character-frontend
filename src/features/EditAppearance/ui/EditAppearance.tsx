import { FC, useState } from 'react';
import {
    Card,
    VStack,
    Text,
    HStack,
    Slider,
    Button,
} from '@tr271v0r/ui-tool-kit';
import { AppearanceType } from '@/shared/types/appearance.type.ts';
import { types } from 'sass';
import Color = types.Color;
import { post } from '@/shared/api/post.ts';
import { ClothesType } from '@/shared/types/clothes.type.ts';
import { PropsType } from '../../../shared/types/props.type.ts';

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
            Rgba: new Color(0, 0, 0, 0),
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

    const initialStateClothes: ClothesType = {
        Component: 0,
        Drawable: 0,
        Palette: 0,
        Texture: 0,
    };
    const [clothes, setClothes] = useState<ClothesType>(initialStateClothes);

    const initialStateProps: PropsType = {
        Drawable: 0,
        Component: 0,
        Texture: 0,
    };
    const [props, setProps] = useState<PropsType>(initialStateProps);

    return (
        <VStack gap={'l'}>
            <Card contentMargin={'m'} variant={'outlined'}>
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

            <Card contentMargin={'m'} variant={'outlined'}>
                <VStack gap={'s'}>
                    <Text size={'xl'}>HeadBlendPaletteColor</Text>
                    <HStack gap={'s'}>
                        <Text>Red</Text>
                        <Slider
                            value={appearance.HeadBlendPaletteColor.Rgba.getR()}
                            onChange={(value) => {
                                appearance.HeadBlendPaletteColor.Rgba.setR(
                                    value,
                                );
                                setAppearance({
                                    ...appearance,
                                    HeadBlendPaletteColor: {
                                        ...appearance.HeadBlendPaletteColor,
                                        Rgba: appearance.HeadBlendPaletteColor
                                            .Rgba,
                                    },
                                });
                            }}
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>

                    <HStack gap={'s'}>
                        <Text>Green</Text>
                        <Slider
                            value={appearance.HeadBlendPaletteColor.Rgba.getG()}
                            onChange={(value) => {
                                appearance.HeadBlendPaletteColor.Rgba.setG(
                                    value,
                                );
                                setAppearance({
                                    ...appearance,
                                    HeadBlendPaletteColor: {
                                        ...appearance.HeadBlendPaletteColor,
                                        Rgba: appearance.HeadBlendPaletteColor
                                            .Rgba,
                                    },
                                });
                            }}
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>

                    <HStack gap={'s'}>
                        <Text>Blue</Text>
                        <Slider
                            value={appearance.HeadBlendPaletteColor.Rgba.getB()}
                            onChange={(value) => {
                                appearance.HeadBlendPaletteColor.Rgba.setB(
                                    value,
                                );
                                setAppearance({
                                    ...appearance,
                                    HeadBlendPaletteColor: {
                                        ...appearance.HeadBlendPaletteColor,
                                        Rgba: appearance.HeadBlendPaletteColor
                                            .Rgba,
                                    },
                                });
                            }}
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>

                    <HStack gap={'s'}>
                        <Text>Alpha</Text>
                        <Slider
                            value={appearance.HeadBlendPaletteColor.Rgba.getA()}
                            onChange={(value) => {
                                appearance.HeadBlendPaletteColor.Rgba.setA(
                                    value,
                                );
                                setAppearance({
                                    ...appearance,
                                    HeadBlendPaletteColor: {
                                        ...appearance.HeadBlendPaletteColor,
                                        Rgba: appearance.HeadBlendPaletteColor
                                            .Rgba,
                                    },
                                });
                            }}
                            min={0}
                            max={1}
                            step={0.1}
                        />
                    </HStack>
                </VStack>
            </Card>

            <Card contentMargin={'m'} variant={'outlined'}>
                <VStack gap={'s'}>
                    <Text size={'xl'}>FaceFeature</Text>
                    <HStack gap={'s'}>
                        <Text>index</Text>
                        <Slider
                            value={appearance.FaceFeature.index}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    FaceFeature: {
                                        ...appearance.FaceFeature,
                                        index: value,
                                    },
                                })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                    <HStack gap={'s'}>
                        <Text>scale</Text>
                        <Slider
                            value={appearance.FaceFeature.scale}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    FaceFeature: {
                                        ...appearance.FaceFeature,
                                        scale: value,
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

            <Card contentMargin={'m'} variant={'outlined'}>
                <VStack gap={'s'}>
                    <Text size={'xl'}>HeadOverlay</Text>
                    <HStack gap={'s'}>
                        <Text>index</Text>
                        <Slider
                            value={appearance.HeadOverlay.index}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    HeadOverlay: {
                                        ...appearance.HeadOverlay,
                                        index: value,
                                    },
                                })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                    <HStack gap={'s'}>
                        <Text>overlayID</Text>
                        <Slider
                            value={appearance.HeadOverlay.overlayID}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    HeadOverlay: {
                                        ...appearance.HeadOverlay,
                                        overlayID: value,
                                    },
                                })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>

                    <HStack gap={'s'}>
                        <Text>opacity</Text>
                        <Slider
                            value={appearance.HeadOverlay.opacity}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    HeadOverlay: {
                                        ...appearance.HeadOverlay,
                                        opacity: value,
                                    },
                                })
                            }
                            min={0}
                            max={1.0}
                            step={0.1}
                        />
                    </HStack>
                </VStack>
            </Card>

            <Card contentMargin={'m'} variant={'outlined'}>
                <VStack gap={'s'}>
                    <Text size={'xl'}>HeadOverlayColor</Text>
                    <HStack gap={'s'}>
                        <Text>overlayID</Text>
                        <Slider
                            value={appearance.HeadOverlayColor.overlayID}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    HeadOverlayColor: {
                                        ...appearance.HeadOverlayColor,
                                        overlayID: value,
                                    },
                                })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                    <HStack gap={'s'}>
                        <Text>colorIndex</Text>
                        <Slider
                            value={appearance.HeadOverlayColor.colorIndex}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    HeadOverlayColor: {
                                        ...appearance.HeadOverlayColor,
                                        colorIndex: value,
                                    },
                                })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                    <HStack gap={'s'}>
                        <Text>colorType</Text>
                        <Slider
                            value={appearance.HeadOverlayColor.colorType}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    HeadOverlayColor: {
                                        ...appearance.HeadOverlayColor,
                                        colorType: value,
                                    },
                                })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                    <HStack gap={'s'}>
                        <Text>secondColorIndex</Text>
                        <Slider
                            value={appearance.HeadOverlayColor.secondColorIndex}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    HeadOverlayColor: {
                                        ...appearance.HeadOverlayColor,
                                        secondColorIndex: value,
                                    },
                                })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                </VStack>
            </Card>

            <Card contentMargin={'m'} variant={'outlined'}>
                <VStack gap={'s'}>
                    <Text size={'xl'}>EyeColor</Text>
                    <HStack gap={'s'}>
                        <Text>index</Text>
                        <Slider
                            value={appearance.EyeColor.index}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    EyeColor: {
                                        ...appearance.EyeColor,
                                        index: value,
                                    },
                                })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                </VStack>
            </Card>

            <Card contentMargin={'m'} variant={'outlined'}>
                <VStack gap={'s'}>
                    <Text size={'xl'}>HairColor</Text>
                    <HStack gap={'s'}>
                        <Text>colorID</Text>
                        <Slider
                            value={appearance.HairColor.colorID}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    HairColor: {
                                        ...appearance.HairColor,
                                        colorID: value,
                                    },
                                })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                    <HStack gap={'s'}>
                        <Text>highlightColorID</Text>
                        <Slider
                            value={appearance.HairColor.highlightColorID}
                            onChange={(value) =>
                                setAppearance({
                                    ...appearance,
                                    HairColor: {
                                        ...appearance.HairColor,
                                        highlightColorID: value,
                                    },
                                })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                </VStack>
            </Card>

            <Card contentMargin={'m'} variant={'outlined'}>
                <VStack gap={'s'}>
                    <Text size={'xl'}>Clothes</Text>
                    <HStack gap={'s'}>
                        <Text>Component</Text>
                        <Slider
                            value={clothes.Component}
                            onChange={(value) =>
                                setClothes({ ...clothes, Component: value })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                    <HStack gap={'s'}>
                        <Text>Drawable</Text>
                        <Slider
                            value={clothes.Drawable}
                            onChange={(value) =>
                                setClothes({ ...clothes, Drawable: value })
                            }
                            min={0}
                            max={1000}
                            step={10}
                        />
                    </HStack>
                    <HStack gap={'s'}>
                        <Text>Texture</Text>
                        <Slider
                            value={clothes.Texture}
                            onChange={(value) =>
                                setClothes({ ...clothes, Texture: value })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                    <HStack gap={'s'}>
                        <Text>Palette</Text>
                        <Slider
                            value={clothes.Palette}
                            onChange={(value) =>
                                setClothes({ ...clothes, Palette: value })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                </VStack>
            </Card>

            <Card contentMargin={'m'} variant={'outlined'}>
                <VStack gap={'s'}>
                    <Text size={'xl'}>Props</Text>
                    <HStack gap={'s'}>
                        <Text>Component</Text>
                        <Slider
                            value={props.Component}
                            onChange={(value) =>
                                setProps({ ...props, Component: value })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                    <HStack gap={'s'}>
                        <Text>Drawable</Text>
                        <Slider
                            value={props.Drawable}
                            onChange={(value) =>
                                setProps({ ...props, Drawable: value })
                            }
                            min={0}
                            max={1000}
                            step={10}
                        />
                    </HStack>
                    <HStack gap={'s'}>
                        <Text>Texture</Text>
                        <Slider
                            value={props.Texture}
                            onChange={(value) =>
                                setProps({ ...props, Texture: value })
                            }
                            min={0}
                            max={255}
                            step={5}
                        />
                    </HStack>
                </VStack>
            </Card>

            <Button
                fullWidth
                onClick={() =>
                    post(
                        'f:c:createCharacter',
                        JSON.stringify({
                            Appearance: appearance,
                            Clothes: clothes,
                            Props: props,
                        }),
                    )
                }
            >
                <Text>Create</Text>
            </Button>
        </VStack>
    );
};

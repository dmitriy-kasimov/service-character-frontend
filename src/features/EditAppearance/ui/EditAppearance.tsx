import { FC, useState } from 'react';
import {
    Card,
    VStack,
    Text,
    Button,
    RadioGroup,
    Slider,
} from '@project-1114/ui-kit';
import { TEditAppearance } from '../model/types/TEditAppearance.ts';
import { DefaultAppearance } from '../const/DefaultAppearance.ts';
import { TAppearance } from '../model/types/TAppearance.ts';
import { ESex } from '../../../shared/types/ESex.ts';
import { post } from '../../../shared/api/post.ts';
import { femaleHairOverlays, maleHairOverlays } from '../const/hairOverlays.ts';

export const EditAppearance: FC = () => {
    const [editor, setEditor] = useState<TEditAppearance>({
        sex: ESex.MALE,
        preset: null,
        appearance: DefaultAppearance[ESex.MALE],
    });

    const updateCharacter = () => {
        const isFemale = editor.sex === ESex.FEMALE;
        setEditor((prev) => ({
            ...prev,
            appearance: {
                ...prev.appearance,
                hairOverlay: isFemale
                    ? //@ts-expect-error later
                      femaleHairOverlays[prev.appearance.hair]
                    : //@ts-expect-error later
                      maleHairOverlays[prev.appearance.hair],
            },
        }));

        if (isFemale) {
            setEditor((prev) => ({
                ...prev,
                appearance: {
                    ...prev.appearance,
                    facialHair: 30,
                    facialHairOpacity: 0,
                },
            }));
        }

        post('f:c:updateCharacter', JSON.stringify(editor));
    };

    const handleChangeSex = (value: string) => {
        setEditor((prev) => ({
            ...prev,
            sex: +value,
            appearance: DefaultAppearance[+value as ESex],
        }));
        updateCharacter();
    };

    const handleChangePreset = (value: string) => {
        setEditor((prev) => ({ ...prev, preset: +value }));
    };

    const handleChangeParam = (param: keyof TAppearance, value: number) => {
        setEditor({
            ...editor,
            appearance: {
                ...editor.appearance,
                [param]: value,
            },
        });
        updateCharacter();
    };

    return (
        <VStack gap={'l'}>
            <Card contentMargin={'m'} variant={'outlined'}>
                <VStack gap={'m'}>
                    <RadioGroup
                        name={'sex'}
                        onChange={handleChangeSex}
                        options={[
                            {
                                value: '1',
                                description: 'Мужской',
                                defaultChecked: true,
                            },
                            { value: '0', description: 'Женский' },
                        ]}
                    />
                    <RadioGroup
                        name={'preset'}
                        onChange={handleChangePreset}
                        options={[
                            {
                                value: '1',
                                description: 'Самп',
                                defaultChecked: true,
                            },
                            { value: '2', description: 'Гта5' },
                            { value: '3', description: 'Гта6' },
                            { value: '4', description: 'Гта7' },
                            { value: '5', description: 'Гта8' },
                            { value: '6', description: 'Гта9' },
                        ]}
                    />
                    <Slider
                        value={editor.appearance.faceFather}
                        onChange={(value) =>
                            handleChangeParam('faceFather', value)
                        }
                        min={1}
                        max={45}
                        step={1}
                    />
                    <Slider
                        value={editor.appearance.skinFather}
                        onChange={(value) =>
                            handleChangeParam('skinFather', value)
                        }
                        min={1}
                        max={45}
                        step={1}
                    />
                    <Slider
                        value={editor.appearance.faceMother}
                        onChange={(value) =>
                            handleChangeParam('faceMother', value)
                        }
                        min={1}
                        max={45}
                        step={1}
                    />
                    <Slider
                        value={editor.appearance.skinMother}
                        onChange={(value) =>
                            handleChangeParam('skinMother', value)
                        }
                        min={1}
                        max={45}
                        step={1}
                    />
                    <Slider
                        value={editor.appearance.faceMix}
                        onChange={(value) =>
                            handleChangeParam('faceMix', value)
                        }
                        min={0}
                        max={1}
                        step={0.1}
                    />
                    <Slider
                        value={editor.appearance.skinMix}
                        onChange={(value) =>
                            handleChangeParam('skinMix', value)
                        }
                        min={0}
                        max={1}
                        step={0.1}
                    />
                </VStack>
            </Card>

            <Button fullWidth onClick={() => console.log(editor)}>
                <Text>Create</Text>
            </Button>
        </VStack>
    );
};

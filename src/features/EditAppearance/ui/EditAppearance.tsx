import { FC, useState } from 'react';
import { Card, VStack, Text, Button } from '@project-1114/ui-kit';
import { TEditAppearance } from '../model/types/TEditAppearance.ts';
import { DefaultAppearance } from '../const/DefaultAppearance.ts';
import { TAppearance } from '../model/types/TAppearance.ts';
import { ESex } from '../../../shared/types/ESex.ts';
import { triggerClientEvent } from '../../../shared/api/post.ts';

export const EditAppearance: FC = () => {
    const [editor, setEditor] = useState<TEditAppearance>({
        sex: ESex.MALE,
        preset: null,
        appearance: DefaultAppearance[ESex.MALE],
    });

    const updateCharacter = () => {
        const isFemale = editor.sex === ESex.FEMALE;

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

        const str = JSON.stringify(editor);
        console.log(editor);
        triggerClientEvent('f:c:updateCharacter', str);
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
        setEditor((prev) => ({
            ...prev,
            appearance: {
                ...prev.appearance,
                [param]: value,
            },
        }));
        updateCharacter();
    };

    const handleChangeFaceFeature = (index: number, value: number) => {
        setEditor((prev) => ({
            ...prev,
            appearance: {
                ...prev.appearance,
                faceFeatures: prev.appearance.faceFeatures.map((feature, i) =>
                    i === index ? value : feature,
                ),
            },
        }));
        updateCharacter();
    };

    const handleChangeOverlayOpacity = (
        id: TOpacityOverlayId,
        option: keyof TOpacityOverlayOptions,
        value: number,
    ) => {
        setEditor((prev) => ({
            ...prev,
            appearance: {
                ...prev.appearance,
                opacityOverlays: {
                    ...prev.appearance.opacityOverlays,
                    [id]: {
                        ...prev.appearance.opacityOverlays[id],
                        [option]: value,
                    },
                },
            },
        }));
        updateCharacter();
    };
    return (
        <VStack gap={'l'}>
            <Card contentMargin={'m'} variant={'outlined'}>
                123
            </Card>

            <Button
                fullWidth
                onClick={() => {
                    updateCharacter();
                }}
            >
                <Text>Create</Text>
            </Button>
        </VStack>
    );
};

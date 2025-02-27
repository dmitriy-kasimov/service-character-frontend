import { FC } from 'react';
import { Slider, VStack } from '@project-1114/ui-kit';
import { ESex } from '@/shared/types/ESex.ts';

import { hairColors } from '@/shared/const/hairColors.ts';
import { maleHair } from '../const/maleHair.ts';
import { femaleHair } from '../const/femaleHair.ts';
import { eyebrows } from '../const/eyebrows.ts';

export const EditHair: FC = () => {
    return (
        <VStack gap={'s'}>
            <Slider
                value={editor.appearance.hair}
                onChange={(value) => handleChangeParam('hair', value)}
                min={0}
                max={
                    editor.sex === ESex.MALE
                        ? maleHair.length
                        : femaleHair.length
                }
                step={1}
            />
            <Slider
                value={editor.appearance.hairColor1}
                onChange={(value) => handleChangeParam('hairColor1', value)}
                min={0}
                max={hairColors.length}
                step={1}
            />
            <Slider
                value={editor.appearance.hairColor2}
                onChange={(value) => handleChangeParam('hairColor2', value)}
                min={0}
                max={hairColors.length}
                step={1}
            />
            <Slider
                value={editor.appearance.eyebrows}
                onChange={(value) => handleChangeParam('eyebrows', value)}
                min={0}
                max={eyebrows.length}
                step={1}
            />
            <Slider
                value={editor.appearance.eyebrowsColor1}
                onChange={(value) => handleChangeParam('eyebrowsColor1', value)}
                min={0}
                max={hairColors.length}
                step={1}
            />
        </VStack>
    );
};

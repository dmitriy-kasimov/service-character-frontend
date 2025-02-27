import { FC } from 'react';
import { Slider, VStack } from '@project-1114/ui-kit';
import { hairColors } from '@/shared/const/hairColors.ts';
import { facialHair } from '../const/facialHair.ts';

export const EditFacialHair: FC = () => {
    return (
        <VStack gap={'s'}>
            <Slider
                value={editor.appearance.facialHair}
                onChange={(value) => handleChangeParam('facialHair', value)}
                min={0}
                max={facialHair.length}
                step={1}
            />
            <Slider
                value={editor.appearance.facialHairOpacity}
                onChange={(value) =>
                    handleChangeParam('facialHairOpacity', value)
                }
                min={0}
                max={1.0}
                step={0.1}
            />
            <Slider
                value={editor.appearance.facialHairColor1}
                onChange={(value) =>
                    handleChangeParam('facialHairColor1', value)
                }
                min={0}
                max={hairColors.length}
                step={1}
            />
        </VStack>
    );
};

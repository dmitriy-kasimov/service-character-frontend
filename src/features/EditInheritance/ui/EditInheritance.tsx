import { FC } from 'react';
import { Slider, VStack } from '@project-1114/ui-kit';

export const EditInheritance: FC = () => {
    return (
        <VStack gap={'m'}>
            <Slider
                value={editor.appearance.faceFather}
                onChange={(value) => handleChangeParam('faceFather', value)}
                min={1}
                max={45}
                step={1}
            />
            <Slider
                value={editor.appearance.skinFather}
                onChange={(value) => handleChangeParam('skinFather', value)}
                min={1}
                max={45}
                step={1}
            />
            <Slider
                value={editor.appearance.faceMother}
                onChange={(value) => handleChangeParam('faceMother', value)}
                min={1}
                max={45}
                step={1}
            />
            <Slider
                value={editor.appearance.skinMother}
                onChange={(value) => handleChangeParam('skinMother', value)}
                min={1}
                max={45}
                step={1}
            />
            <Slider
                value={editor.appearance.faceMix}
                onChange={(value) => handleChangeParam('faceMix', value)}
                min={0}
                max={1}
                step={0.1}
            />
            <Slider
                value={editor.appearance.skinMix}
                onChange={(value) => handleChangeParam('skinMix', value)}
                min={0}
                max={1}
                step={0.1}
            />
        </VStack>
    );
};

import { FC } from 'react';
import { HStack, Slider, Text, VStack } from '@project-1114/ui-kit';
import { faceFeatures } from '../const/faceFeatures.ts';

export const EditFaceFeatures: FC = () => {
    return (
        <VStack gap={'s'}>
            {faceFeatures.map((feature, index) => (
                <HStack gap={'s'} align={'center'}>
                    <Text>{feature}:</Text>
                    <Slider
                        value={editor.appearance.faceFeatures[index]}
                        onChange={(value) =>
                            handleChangeFaceFeature(index, value)
                        }
                        min={-1}
                        step={0.1}
                        max={1}
                        key={feature}
                    />
                </HStack>
            ))}
        </VStack>
    );
};

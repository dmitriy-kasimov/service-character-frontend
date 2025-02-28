import { FC } from 'react';
import { VStack } from '@project-1114/ui-kit';
import { FaceFeatures } from '@/widgets/FaceFeatures';

export const PageCreateCharacter: FC = () => {
    return (
        <VStack gap={'m'}>
            <FaceFeatures />
        </VStack>
    );
};

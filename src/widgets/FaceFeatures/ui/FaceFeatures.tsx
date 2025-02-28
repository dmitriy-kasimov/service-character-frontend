import { FC } from 'react';
import { Accordion } from '@project-1114/ui-kit';
import { Text } from '@project-1114/ui-kit';
import { EditFaceFeatures } from '@/features/EditFaceFeatures';

export const FaceFeatures: FC = () => {
    return (
        <Accordion
            title={<Text size={'l'}>Face Features</Text>}
            description={<EditFaceFeatures />}
        />
    );
};

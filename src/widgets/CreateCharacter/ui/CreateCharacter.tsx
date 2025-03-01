import { FC } from 'react';
import { Accordion, Text, VStack } from '@project-1114/ui-kit';
import { EditSex } from '@/features/EditSex';
import { EditFaceFeatures } from '@/features/EditFaceFeatures';
import { EditOverlays } from '@/features/EditOverlays';
import { EditInheritance } from '@/features/EditInheritance';
import { EditHair } from '@/features/EditHair';
import { EditFacialHair } from '@/features/EditFacialHair';

export const CreateCharacter: FC = () => {
    return (
        <VStack gap={'xs'}>
            <Accordion
                title={<Text size={'l'}>Sex</Text>}
                description={<EditSex />}
            />
            <Accordion
                title={<Text size={'l'}>Inheritance</Text>}
                description={<EditInheritance />}
            />
            <Accordion
                title={<Text size={'l'}>Hair</Text>}
                description={<EditHair />}
            />

            <Accordion
                title={<Text size={'l'}>Face Features</Text>}
                description={<EditFaceFeatures />}
            />
            <Accordion
                title={<Text size={'l'}>Overlays</Text>}
                description={<EditOverlays />}
            />
            <Accordion
                title={<Text size={'l'}>Facial hair</Text>}
                description={<EditFacialHair />}
            />
        </VStack>
    );
};

import { FC } from 'react';
import { Accordion, Text, VStack } from '@project-1114/ui-kit';
import { EditSex, getSex } from '@/features/EditSex';
import { EditFaceFeatures } from '@/features/EditFaceFeatures';
import { EditOverlays } from '@/features/EditOverlays';
import { EditInheritance } from '@/features/EditInheritance';
import { EditHair } from '@/features/EditHair';
import { useSelector } from 'react-redux';
import { ESex } from '@/shared/types/ESex.ts';
import { EditFacialHair } from '@/features/EditFacialHair';

export const CreateCharacter: FC = () => {
    const sex = useSelector(getSex);
    const isMale = sex === ESex.MALE;

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
            {isMale ? (
                <Accordion
                    title={<Text size={'l'}>Facial hair</Text>}
                    description={<EditFacialHair />}
                />
            ) : null}
        </VStack>
    );
};

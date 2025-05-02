import { FC, useEffect } from 'react';
import {
    Accordion,
    Card,
    HStack,
    Icon,
    Text,
    VStack,
} from '@project-1114/ui-kit';
import { EditSex } from '@/features/EditSex';
import { EditFaceFeatures } from '@/features/EditFaceFeatures';
import { EditOverlays } from '@/features/EditOverlays';
import { EditInheritance } from '@/features/EditInheritance';
import { EditHair } from '@/features/EditHair';
import { EditFacialHair } from '@/features/EditFacialHair';
import { useInitCharacter } from '@/shared/hooks/useInitCharacter.ts';
import { EditEyes } from '@/features/EditEyes';
import { EditColorOverlays } from '@/features/EditColorOverlays';

import EyesIcon from '../assets/eyes.svg?react';
import FaceFeaturesIcon from '../assets/face-features.svg?react';
import HairIcon from '../assets/hair.svg?react';
import InheritanceIcon from '../assets/inheritance.svg?react';
import OverlaysIcon from '../assets/overlays.svg?react';
import SexIcon from '../assets/sex.svg?react';
import FacialHairIcon from '../assets/facial-hair.svg?react';

export const CreateCharacter: FC = () => {
    const init = useInitCharacter();

    useEffect(() => {
        init();
    }, []);

    return (
        <Card style={{ width: '20%', background: 'var(--color-main)' }}>
            <VStack gap={'l'} max>
                <Accordion
                    title={
                        <HStack align={'center'} gap={'l'}>
                            <Icon Svg={SexIcon} fill={'var(--color-accent)'} />
                            <Text size={'l'}>Sex</Text>
                        </HStack>
                    }
                    description={<EditSex />}
                    fullWidth
                />
                <Accordion
                    title={
                        <HStack align={'center'} gap={'l'}>
                            <Icon
                                Svg={InheritanceIcon}
                                fill={'var(--color-accent)'}
                            />
                            <Text size={'l'}>Inheritance</Text>
                        </HStack>
                    }
                    description={<EditInheritance />}
                    fullWidth
                />
                <Accordion
                    title={
                        <HStack align={'center'} gap={'l'}>
                            <Icon Svg={HairIcon} fill={'var(--color-accent)'} />
                            <Text size={'l'}>Hair</Text>
                        </HStack>
                    }
                    description={<EditHair />}
                    fullWidth
                />
                <Accordion
                    title={
                        <HStack align={'center'} gap={'l'}>
                            <Icon Svg={EyesIcon} fill={'var(--color-accent)'} />
                            <Text size={'l'}>Eyes</Text>
                        </HStack>
                    }
                    description={<EditEyes />}
                    fullWidth
                />
                <Accordion
                    title={
                        <HStack align={'center'} gap={'l'}>
                            <Icon
                                Svg={FaceFeaturesIcon}
                                fill={'var(--color-accent)'}
                            />
                            <Text size={'l'}>Face features</Text>
                        </HStack>
                    }
                    description={<EditFaceFeatures />}
                    fullWidth
                />
                <Accordion
                    title={
                        <HStack align={'center'} gap={'l'}>
                            <Icon
                                Svg={OverlaysIcon}
                                fill={'var(--color-accent)'}
                            />
                            <Text size={'l'}>Overlays</Text>
                        </HStack>
                    }
                    description={<EditOverlays />}
                    fullWidth
                />
                <Accordion
                    title={
                        <HStack align={'center'} gap={'l'}>
                            <Icon
                                Svg={OverlaysIcon}
                                fill={'var(--color-accent)'}
                            />
                            <Text size={'l'}>Color overlays</Text>
                        </HStack>
                    }
                    description={<EditColorOverlays />}
                    fullWidth
                />
                <Accordion
                    title={
                        <HStack align={'center'} gap={'l'}>
                            <Icon
                                Svg={FacialHairIcon}
                                fill={'var(--color-accent)'}
                            />
                            <Text size={'l'}>Facial hair</Text>
                        </HStack>
                    }
                    description={<EditFacialHair />}
                    fullWidth
                />
            </VStack>
        </Card>
    );
};

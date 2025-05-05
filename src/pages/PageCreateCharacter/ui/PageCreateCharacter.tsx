import { FemaleAppearance } from '@/widgets/FemaleAppearance';
import { MainAppearance } from '@/widgets/MainAppearance';
import { MaleAppearance } from '@/widgets/MaleAppearance';
import { Card, HStack, VStack } from '@project-1114/ui-kit';
import { FC } from 'react';

export const PageCreateCharacter: FC = () => {
    return (
        <HStack max justify={'between'} align={'start'}>
            <Card
                style={{
                    width: '20%',
                    background: 'var(--color-main)',
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 0,
                }}
            >
                <VStack gap={'l'} max>
                    <MainAppearance />
                </VStack>
            </Card>
            <Card
                style={{
                    width: '20%',
                    background: 'var(--color-main)',
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                    position: 'sticky',
                    top: 0,
                }}
            >
                <VStack gap={'l'} max>
                    <MaleAppearance />
                    <FemaleAppearance />
                </VStack>
            </Card>
        </HStack>
    );
};

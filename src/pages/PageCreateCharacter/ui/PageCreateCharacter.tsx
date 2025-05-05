import { MainAppearance } from '@/widgets/MainAppearance';
import { Card, VStack } from '@project-1114/ui-kit';
import { FC } from 'react';

export const PageCreateCharacter: FC = () => {
    return (
        <Card style={{ width: '20%', background: 'var(--color-main)' }}>
            <VStack gap={'l'} max>
                <MainAppearance />
            </VStack>
        </Card>
    );
};

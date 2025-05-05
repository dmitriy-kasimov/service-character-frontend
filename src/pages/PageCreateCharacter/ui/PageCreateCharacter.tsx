import { FC } from 'react';
import { Widgets } from '../const/Widgets.tsx';
import {
    Accordion,
    Card,
    HStack,
    Icon,
    Text,
    VStack,
} from '@project-1114/ui-kit';

export const PageCreateCharacter: FC = () => {
    const Wids = Widgets.map((widget) => (
        <Accordion
            key={widget.label}
            title={
                <HStack align={'center'} gap={'l'}>
                    <Icon
                        Svg={widget.icon}
                        fill={'var(--color-accent)'}
                        width={32}
                        height={32}
                    />
                    <Text size={'l'}>{widget.label}</Text>
                </HStack>
            }
            description={widget.description}
            fullWidth
        />
    ));
    return (
        <Card style={{ width: '20%', background: 'var(--color-main)' }}>
            <VStack gap={'l'} max>
                {Wids}
            </VStack>
        </Card>
    );
};

import { HStack, Text, VStack } from '@project-1114/ui-kit';
import { ReactElement } from 'react';

type AppearanceFeatureItemProps = {
    title: string;
    from?: string;
    to?: string;
    slider: ReactElement;
};

export function AppearanceFeatureItem(props: AppearanceFeatureItemProps) {
    const { title, from, to, slider } = props;

    return (
        <VStack gap={'xs'} align={'start'} max>
            <Text>{title}</Text>
            <HStack gap={'s'} align={'center'} justify={'center'} max>
                {from && <Text size={'s'}>{from}</Text>}
                {slider}
                {to && <Text size={'s'}>{to}</Text>}
            </HStack>
        </VStack>
    );
}

import { HStack, Text, VStack } from '@project-1114/ui-kit';
import { ReactElement } from 'react';

type AppearanceFeatureItemsProps = {
    title: string;
    params: {
        label: string;
        slider: ReactElement;
    }[];
};

export function AppearanceFeatureItems(props: AppearanceFeatureItemsProps) {
    const { title, params } = props;

    return (
        <VStack gap={'xs'} align={'start'} max>
            <Text>{title}</Text>
            {params.map((param) => (
                <HStack
                    gap={'s'}
                    align={'center'}
                    justify={'center'}
                    max
                    key={param.label}
                >
                    <Text size={'s'}>{param.label}</Text>
                    {param.slider}
                </HStack>
            ))}
        </VStack>
    );
}

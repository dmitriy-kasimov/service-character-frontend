import { Accordion, HStack, Icon, Text } from '@project-1114/ui-kit';
import React, { ReactElement } from 'react';

type AppearanceFeatureProps = {
    label: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    description: ReactElement;
};

export const AppearanceFeature = ({
    label,
    icon,
    description,
}: AppearanceFeatureProps) => {
    return (
        <Accordion
            key={label}
            title={
                <HStack align={'center'} gap={'l'}>
                    <Icon
                        Svg={icon}
                        fill={'var(--color-accent)'}
                        width={32}
                        height={32}
                    />
                    <Text size={'l'}>{label}</Text>
                </HStack>
            }
            description={description}
            fullWidth
        />
    );
};

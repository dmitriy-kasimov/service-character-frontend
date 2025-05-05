import { Accordion, HStack, Icon, Text } from '@project-1114/ui-kit';
import { TAppearanceFeature } from '../model/types/TAppearanceFeature.ts';

export const AppearanceFeature = ({
    label,
    icon,
    description,
}: TAppearanceFeature) => {
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

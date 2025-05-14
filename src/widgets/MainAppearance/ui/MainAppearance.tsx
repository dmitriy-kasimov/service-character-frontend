import { Card, VStack } from '@project-1114/ui-kit';
import { appearanceFeatures } from '../const/appearanceFeatures';
import { AppearanceFeature } from '@/shared/components/AppearanceFeature';

export const MainAppearance = () => {
    return (
        <Card
            style={{
                width: '25%',
                background: 'var(--color-main)',
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                position: 'sticky',
                top: 0,
            }}
        >
            <VStack gap={'m'} max>
                {appearanceFeatures.map((feature) => (
                    <AppearanceFeature
                        key={feature.label}
                        label={feature.label}
                        description={feature.description}
                        icon={feature.icon}
                    />
                ))}
            </VStack>
        </Card>
    );
};

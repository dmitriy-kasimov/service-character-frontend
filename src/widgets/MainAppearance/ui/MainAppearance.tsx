import { appearanceFeatures } from '../const/appearanceFeatures';
import { AppearanceFeature } from '@/shared/components/AppearanceFeature';

export const MainAppearance = () =>
    appearanceFeatures.map((feature) => (
        <AppearanceFeature
            key={feature.label}
            label={feature.label}
            description={feature.description}
            icon={feature.icon}
        />
    ));

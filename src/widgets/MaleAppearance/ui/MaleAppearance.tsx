import { useSelector } from 'react-redux';
import { appearanceFeatures } from '../const/appearanceFeatures';
import { AppearanceFeature } from '@/shared/components/AppearanceFeature';
import { getSex } from '@/features/EditSex';
import { ESex } from '@/shared/types/ESex.ts';

export const MaleAppearance = () => {
    const currentSex = useSelector(getSex);
    if (currentSex === ESex.FEMALE) return null;

    return (
        <>
            {appearanceFeatures.map((feature) => (
                <AppearanceFeature
                    label={feature.label}
                    description={feature.description}
                    icon={feature.icon}
                />
            ))}
        </>
    );
};

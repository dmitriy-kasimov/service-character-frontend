import { FC } from 'react';
import { Accordion, HStack, Icon, Text, VStack } from '@project-1114/ui-kit';
import { FaceFeature } from './FaceFeature.tsx';
import { faceFeatures } from '../const/faceFeatures.ts';
import cls from './EditFaceFeatures.module.scss';

export const EditFaceFeatures: FC = () => {
    return (
        <VStack gap={'m'} max>
            {Object.entries(faceFeatures).map(([featureIndex, feature]) => (
                <Accordion
                    fullWidth
                    className={cls.EditFaceFeatures}
                    key={featureIndex}
                    title={
                        <HStack align={'center'} gap={'m'}>
                            <Icon
                                Svg={feature.icon}
                                fill={'var(--color-accent)'}
                                width={32}
                                height={32}
                            />
                            <Text size={'m'}>{feature.description}</Text>
                        </HStack>
                    }
                    description={Object.entries(feature.features).map(
                        ([faceFeatureIndex, faceFeature]) => (
                            <FaceFeature
                                feature={faceFeature}
                                featureIndex={faceFeatureIndex}
                                key={faceFeatureIndex}
                            />
                        ),
                    )}
                />
            ))}
        </VStack>
    );
};

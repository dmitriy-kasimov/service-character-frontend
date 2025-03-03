import { FC, useEffect } from 'react';
import { HStack, Slider, Text, VStack } from '@project-1114/ui-kit';
import { faceFeatures } from '../const/faceFeatures.ts';
import { EFaceFeature } from '../model/types/EFaceFeature.ts';
import { getFaceFeatures } from '../model/selectors/editFaceFeaturesSelectors.ts';
import { useSelector } from 'react-redux';
import { editFaceFeaturesActions } from '../model/slices/editFaceFeaturesSlice.ts';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';
import { TFaceFeatures } from '../model/types/EditFaceFeaturesSchema.ts';

export const EditFaceFeatures: FC = () => {
    const dispatch = useAppDispatch();
    const features = useSelector(getFaceFeatures);

    const handleChangeFaceFeature = (feature: EFaceFeature, value: number) => {
        dispatch(editFaceFeaturesActions.change({ [feature]: value }));
    };

    useEffect(() => {
        triggerClientEvent<TFaceFeatures>('f:c:editFaceFeatures', features);
    }, [features]);

    return (
        <VStack gap={'l'} align={'center'} max>
            {Object.entries(faceFeatures).map(([featureIndex, feature]) => (
                <VStack gap={'xs'} align={'start'} key={featureIndex} max>
                    <Text>{feature.description}</Text>
                    <HStack gap={'s'} align={'center'} justify={'center'} max>
                        <Text size={'s'}>{feature.from}</Text>
                        <Slider
                            value={features[+featureIndex as EFaceFeature]}
                            onChange={(value) =>
                                handleChangeFaceFeature(
                                    +featureIndex as EFaceFeature,
                                    value,
                                )
                            }
                            min={-1}
                            step={0.1}
                            max={1}
                            showValue={false}
                        />
                        <Text size={'s'}>{feature.to}</Text>
                    </HStack>
                </VStack>
            ))}
        </VStack>
    );
};

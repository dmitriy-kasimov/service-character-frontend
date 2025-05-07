import { HStack, Slider, Text, VStack } from '@project-1114/ui-kit';
import { EFaceFeature } from '../model/types/EFaceFeature.ts';
import { TDescriptionFaceFeature } from '../model/types/TDescriptionFaceFeature';
import { editFaceFeaturesActions } from '../model/slices/editFaceFeaturesSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';
import { getFaceFeatures } from '../model/selectors/editFaceFeaturesSelectors';
import { TFaceFeatures } from '../model/types/TFaceFeatures.ts';

type FaceFeatureProps = {
    feature: TDescriptionFaceFeature;
    featureIndex: string;
};

export const FaceFeature = ({ feature, featureIndex }: FaceFeatureProps) => {
    const dispatch = useAppDispatch();
    const features = useSelector(getFaceFeatures);
    const handleChangeFaceFeature = (feature: EFaceFeature, value: number) => {
        dispatch(editFaceFeaturesActions.change({ [feature]: value }));
    };

    useEffect(() => {
        triggerClientEvent<TFaceFeatures>('f:c:editFaceFeatures', features);
    }, [features]);

    return (
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
                />
                <Text size={'s'}>{feature.to}</Text>
            </HStack>
        </VStack>
    );
};

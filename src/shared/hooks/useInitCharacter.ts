import { useSelector } from 'react-redux';
import { getHair } from '@/features/EditHair';
import { getInheritance } from '@/features/EditInheritance';
import { getOverlays } from '@/features/EditOverlays';
import { getSex } from '@/features/EditSex';
import { getFaceFeatures } from '@/features/EditFaceFeatures';
import { getFacialHair } from '@/features/EditFacialHair';
import { triggerClientEvent } from '@/shared/api/triggerClientEvent.ts';
import { TFaceFeatures } from '@/features/EditFaceFeatures';
import { TFacialHair } from '@/features/EditFacialHair';
import { THair } from '@/features/EditHair';
import { TInheritance } from '@/features/EditInheritance';
import { TOverlays } from '@/features/EditOverlays';
import { ESex } from '@/shared/types/ESex.ts';
import { getEyes, TEyes } from '@/features/EditEyes';
import { getColorOverlays, TColorOverlays } from '@/features/EditColorOverlays';

export const useInitCharacter = () => {
    const features = useSelector(getFaceFeatures);
    const facialHair = useSelector(getFacialHair);
    const hair = useSelector(getHair);
    const inheritance = useSelector(getInheritance);
    const overlays = useSelector(getOverlays);
    const sex = useSelector(getSex);
    const eyes = useSelector(getEyes);
    const colorOverlays = useSelector(getColorOverlays);

    const init = () => {
        triggerClientEvent<ESex>('f:c:editSex', sex);
        triggerClientEvent<TInheritance>('f:c:editInheritance', inheritance);
        triggerClientEvent<TEyes>('f:c:editEyes', eyes);
        triggerClientEvent<TFaceFeatures>('f:c:editFaceFeatures', features);
        triggerClientEvent<TOverlays>('f:c:editOverlays', overlays);
        triggerClientEvent<TColorOverlays>(
            'f:c:editColorOverlays',
            colorOverlays,
        );
        triggerClientEvent<THair>('f:c:editHair', hair);
        triggerClientEvent<TFacialHair>('f:c:editFacialHair', facialHair);
    };

    return init;
};

import { EditAppearance } from '@/features/EditAppearance';
import { Card } from '@project-1114/ui-kit';
import styles from './CardEditAppearance.module.scss';

export const CardEditAppearance = () => {
    return (
        <Card contentMargin={'m'} className={styles.CardEditAppearance}>
            <EditAppearance />
        </Card>
    );
};

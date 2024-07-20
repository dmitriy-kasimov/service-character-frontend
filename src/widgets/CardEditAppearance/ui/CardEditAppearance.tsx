import { EditAppearance } from '@/features/EditAppearance';
import { Card } from '@tr271v0r/ui-tool-kit';
import styles from './CardEditAppearance.module.scss';

export const CardEditAppearance = () => {
    return (
        <Card contentMargin={'m'} className={styles.CardEditAppearance}>
            <EditAppearance />
        </Card>
    );
};

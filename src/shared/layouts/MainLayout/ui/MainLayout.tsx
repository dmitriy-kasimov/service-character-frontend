import { FC, ReactElement } from 'react';
import styles from './MainLayout.module.scss';

type MainLayoutProps = {
    content?: ReactElement;
};
export const MainLayout: FC<MainLayoutProps> = ({ content }) => {
    return <div className={styles.MainLayout}>{content}</div>;
};

import { RouteProps } from 'react-router-dom';
import { AppRoutes, getRouteEditAppearance } from '@/shared/const/router';
import { PageEditAppearance } from '@/pages/PageEditAppearance';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.APPEARANCE]: {
        path: getRouteEditAppearance(),
        element: <PageEditAppearance />,
    },
};

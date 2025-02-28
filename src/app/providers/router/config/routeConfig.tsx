import { RouteProps } from 'react-router-dom';
import { AppRoutes, getRouteEditAppearance } from '@/shared/const/router';
import { PageCreateCharacter } from '@/pages/PageCreateCharacter';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.APPEARANCE]: {
        path: getRouteEditAppearance(),
        element: <PageCreateCharacter />,
    },
};

import { RouteProps } from 'react-router-dom';
import {
    AppRoutes,
    getRouteAuthorization,
    getRouteNews,
    getRouteRegistration,
    getRouteRules,
} from '@/shared/const/router';
import { PageAuthorization } from '@/pages/PageAuthorization';
import { PageRegistration } from '@/pages/PageRegistration';
import { PageRules } from '@/pages/PageRules';
import { PageNews } from '@/pages/PageNews';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.AUTHORIZATION]: {
        path: getRouteAuthorization(),
        element: <PageAuthorization />,
    },
    [AppRoutes.REGISTRATION]: {
        path: getRouteRegistration(),
        element: <PageRegistration />,
    },
    [AppRoutes.RULES]: {
        path: getRouteRules(),
        element: <PageRules />,
    },
    [AppRoutes.NEWS]: {
        path: getRouteNews(),
        element: <PageNews />,
    },
};

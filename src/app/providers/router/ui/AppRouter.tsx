import { Suspense, memo, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { LoaderPage } from '@/widgets/LoaderPage';

const AppRouter = () => {
    // для того чтобы ссылка сохранялась и не приходилось делать одни и те же вычисления
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<LoaderPage />}>{route.element}</Suspense>
        );

        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);

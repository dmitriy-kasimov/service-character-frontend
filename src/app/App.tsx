import { Suspense } from 'react';
import { MainLayout } from '@/shared/layouts/MainLayout';
import AppRouter from './providers/router/ui/AppRouter.tsx';
import './App.css';

function App() {
    return (
        <Suspense fallback={'Loading...'}>
            <MainLayout content={<AppRouter />} />
        </Suspense>
    );
}

export default App;

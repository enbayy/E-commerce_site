import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routing/routes';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundaryPage } from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter(
    routes
);

function AppClientRouter() {

    return (

        <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundaryPage fallback={<div>Something Error</div>}>
                <RouterProvider router={router} />
            </ErrorBoundaryPage>
        </Suspense>

    );
}

export default AppClientRouter
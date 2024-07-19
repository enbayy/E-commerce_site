import { ROUTES_ID } from '../routing/routes_id';
import { getRoutePath } from '../routing/routes';
import { redirect } from 'react-router-dom';
import { currentSession } from './CurrentSession';

export const CheckAuthLoader = async ({ request }) => {
    const accessToken = await currentSession();
    const isAuthenticated = !!accessToken;
    console.log("Is Authenticated:", isAuthenticated);

    const url = new URL(request.url);
    const path = url.pathname;

    const isLoginSidePage = (path) => {
        const loginsidePages = [
            ROUTES_ID.login,
            ROUTES_ID.register,
            ROUTES_ID.forgotpassword,
        ];
        const loginsidePaths = loginsidePages.map((id) => getRoutePath(id));

        return loginsidePaths.some((route) => route === path);
    };

    if (isAuthenticated) {
        if (isLoginSidePage(path)) {
            return redirect(getRoutePath(ROUTES_ID.home));
        }
    } else {
        if (!isLoginSidePage(path)) {
            return redirect(getRoutePath(ROUTES_ID.login));
        }
    }
    return null;
};
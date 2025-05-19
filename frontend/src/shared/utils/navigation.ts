import { NavigateFunction } from 'react-router-dom';

/**
 * Navigates to the main page ('/'), replacing history entry.
 */
export const goToMainPage = (navigate: NavigateFunction) => {
  navigate('/', { replace: true });
};

/**
 * Navigates to any route, replacing history entry.
 */
export const goToRouteReplace = (navigate: NavigateFunction, route: string) => {
  navigate(route, { replace: true });
}; 
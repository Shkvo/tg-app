import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

const Router = () => {
  const definedRoutes = {
    '/': HomePage,
    '/login': LoginPage,
  };

  window.addEventListener('popstate', () => {
    const route = window.location.pathname;
    definedRoutes[route]();
  });

  return {
    setRoute(route) {
      window.history.pushState(null, '', route);
      definedRoutes[route]();
    },
  };
};

export default Router();

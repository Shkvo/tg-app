import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

class Router {
  constructor() {
    this.definedRoutes = Object.freeze({
      '/': HomePage,
      '/login': LoginPage,
    });

    window.addEventListener('popstate', () => {
      const route = window.location.pathname;
      this.definedRoutes[route]();
    });
  }

  setRoute(route) {
    window.history.pushState(null, '', route);
    this.definedRoutes[route]();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Router();
    }

    return this.instance;
  }
}

export default Router.getInstance();

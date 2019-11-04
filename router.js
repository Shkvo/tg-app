import homePage from './pages/homePage';
import loginPage from './pages/loginPage';
import signupPage from './pages/signupPage';

class Router {
  constructor() {
    this.definedRoutes = Object.freeze({
      '/': homePage,
      '/login': loginPage,
      '/signup': signupPage,
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

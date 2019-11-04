import router from './router';

export default () => {
  const route = window.location.pathname;
  router.setRoute(route);
};

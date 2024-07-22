import RouteWithRedirections from '../routing/RouteWithRedirections';

const routesControl = (routes) => {
  return routes.map((route) => {

    if (route.isPrivate) {
      return {
        ...route,
        element: (
          <RouteWithRedirections {...route}>
            {route.element}
          </RouteWithRedirections>
        ),
      };
    }

    return route;
  });
}

export default routesControl


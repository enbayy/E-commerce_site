import React from 'react'

const routesControl = (routes) => {
    console.log(routes)
    return routes
}

export default routesControl

// return routes.map((route) => {
//     if (route.isPublic) {
//       return {
//         ...route,
//         element: (
//           <PublicRoute>
//             {route.element}
//           </PublicRoute>
//         ),
//       };
//     }

//     if (route.isPrivate) {
//       return {
//         ...route,
//         element: (
//           <PrivateRoute>
//             {route.element}
//           </PrivateRoute>
//         ),
//       };
//     }

//     return route;
//   });
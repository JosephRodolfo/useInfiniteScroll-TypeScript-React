import * as React from 'react';
import Application from '@src/components/Application';
import { useRoutes } from 'react-router-dom';
import BlogPost from '@src/components/BlogPost';


function AppRouter() {
  const mainRoutes = {
    path: '/',
    element: <Application />,
  };

  const blogRoutes = {
    path: 'blogpost',
    element: <BlogPost />,
    children: [
      {
        path: ':id',
        element: <BlogPost />,
      },
    ],
  };

  const routing = useRoutes([mainRoutes, blogRoutes]);

  return <>{routing}</>;
}

export default AppRouter;

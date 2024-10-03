import React from 'react';

export const teamRoutes = [
  {
    path: '/team',
    Component: React.lazy(() => import('../team')),
    index: true,
  },
];

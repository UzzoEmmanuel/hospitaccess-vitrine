import React from 'react';

export const serviceBedManagerRoutes = [
  {
    path: '/service/bed-manager',
    Component: React.lazy(() => import('../service-bedManager')),
    index: true,
  },
];

export const serviceHospitaccessProRoutes = [
  {
    path: '/service/hospit-access-pro',
    Component: React.lazy(() => import('../service-hospitaccessPro')),
    index: true,
  },
];

export const ServiceOnlinePreAdmissionWhiteLabel = [
  {
    path: '/service/white-label/online-pre-admission',
    Component: React.lazy(() => import('../service-whiteLabel-onlinePreAdmission')),
    index: true,
  },
];

export const ServiceOnlineAdmissionWhiteLabel = [
  {
    path: '/service/white-label/online-admission',
    Component: React.lazy(() => import('../service-whiteLabel-onlineAdmission')),
    index: true,
  },
];

import { homeRoutes } from '../pages/home/config/routes';
import { teamRoutes } from '../pages/team/config/routes';
import {
  serviceBedManagerRoutes,
  ServiceOnlinePreAdmissionWhiteLabel,
  ServiceOnlineAdmissionWhiteLabel,
  serviceHospitaccessProRoutes,
} from '../pages/service/config/routes';

export const publicRoutes = [
  ...homeRoutes,
  ...teamRoutes,
  ...serviceBedManagerRoutes,
  ...ServiceOnlineAdmissionWhiteLabel,
  ...serviceHospitaccessProRoutes,
  ...ServiceOnlinePreAdmissionWhiteLabel,
];

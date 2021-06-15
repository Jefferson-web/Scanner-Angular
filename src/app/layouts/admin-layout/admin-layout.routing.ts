import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ReportesComponent } from '../../reportes/reportes.component';
import { FacturacionComponent } from '../../facturacion/facturacion.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'inicio', component: DashboardComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'facturacion', component: FacturacionComponent },
    { path: 'reportes', component: ReportesComponent }
];

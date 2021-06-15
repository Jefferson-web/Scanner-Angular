import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ReportesComponent } from '../../reportes/reportes.component';
import { FacturacionComponent } from '../../facturacion/facturacion.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ListaGuiasComponent } from '../../lista-guias/lista-guias.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(maskConfig)
  ],
  declarations: [
    DashboardComponent,
    NotificationsComponent,
    ReportesComponent,
    FacturacionComponent,
    ListaGuiasComponent
  ]
})

export class AdminLayoutModule {}

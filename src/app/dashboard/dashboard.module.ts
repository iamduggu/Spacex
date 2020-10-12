import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { DashboardService } from './service/dashboard.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FilterComponent, LaunchListComponent, HomeComponent],
  imports: [CommonModule, DashboardRoutingModule],
  providers: [DashboardService,HttpClientModule],
})
export class DashboardModule {}

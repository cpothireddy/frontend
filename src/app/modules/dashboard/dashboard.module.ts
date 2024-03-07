import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SalesComponent } from './sales/sales.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    ProductListComponent,
    UserListComponent,
    AddProductComponent,
    SalesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(dashboardRoutes)
  ],
  exports:[RouterModule]
})
export class DashboardModule { }

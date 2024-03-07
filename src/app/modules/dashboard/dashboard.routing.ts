import { AddProductComponent } from "./add-product/add-product.component";
import { DashboardComponent } from "./dashboard.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { SalesComponent } from './sales/sales.component';

export const dashboardRoutes = [
    {
        path: '', component: DashboardComponent, children: [
            { path: 'productList', component: ProductListComponent },
            { path: 'addproduct', component: AddProductComponent },
            { path: 'sales', component: SalesComponent },
        ]
    }
]
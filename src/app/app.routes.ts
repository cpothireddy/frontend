import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NewsComponent } from "./pages/news/news.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { DashboardModule } from "./modules/dashboard/dashboard.module";

export const appRoutes: Routes = [
    { path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'news', component: NewsComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    { path: 'dashboard-module', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)}
]
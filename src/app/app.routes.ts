import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { SalidasComponent } from './components/salidas/salidas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent , pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'entradas',component:EntradasComponent},
    {path:'salidas',component:SalidasComponent}
];

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { HomeComponent } from './home/home';
import { PermisoForm } from './permiso-form/permiso-form';
import { LayoutComponent } from './layout/layout';

export const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'permiso', component: PermisoForm }
    ]
  }
];

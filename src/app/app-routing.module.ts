import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  {
		path: 'dashboard',
    // title: 'Dashboard',
		loadChildren: () =>
			import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
		  // canActivate: [AuthGuard]
  },
  {
    path: 'car-registration',
    // title: 'Car registration',
    loadChildren: () => import('./features/car-registration/car-registration.module').then((m) => m.CarRegistrationModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

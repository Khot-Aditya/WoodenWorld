import { ExploreComponent } from './pages/explore/explore.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [

  { path: 'account/sign-in', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'account/sign-up', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'account/sign-out', redirectTo: '/sign-out', pathMatch: 'full' },

  { path: '', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: LoginComponent },
  { path: 'sign-out', component: AccountComponent },
  { path: 'explore', component: ExploreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

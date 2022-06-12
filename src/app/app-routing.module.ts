import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SignupComponentComponent } from './components/signup-component/signup-component.component';
import { SigninComponentComponent } from './components/signin-component/signin-component.component';
import { ContactUsComponent } from 'src/app/components/account-components/contact-us/contact-us.component';
import { HelpComponent } from './components/account-components/help/help.component';
import { SettingsComponent } from './components/account-components/settings/settings.component';
import { PaymentOptionsComponent } from './components/account-components/payment-options/payment-options.component';
import { HistoryComponent } from './components/account-components/history/history.component';
import { ReviewsComponent } from './components/account-components/reviews/reviews.component';
import { AddressBookComponent } from './components/account-components/address-book/address-book.component';
import { WishlistComponent } from './components/account-components/wishlist/wishlist.component';
import { OrdersComponent } from './components/account-components/orders/orders.component';
import { ProfileComponent } from './components/account-components/profile/profile.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { AlertsComponent } from './components/account-components/alerts/alerts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  {
    path: 'account', component: AccountComponent, children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'manage-orders', component: OrdersComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'address-book', component: AddressBookComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'my-reviews', component: ReviewsComponent },
      { path: 'recently-viewed', component: HistoryComponent },
      { path: 'payment-methods', component: PaymentOptionsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'need-help', component: HelpComponent },
      { path: 'contact-us', component: ContactUsComponent },

    ]
  },
  {
    path: 'user', component: LoginComponent, children: [
      { path: 'sign-in', component: SigninComponentComponent },
      { path: 'sign-up', component: SignupComponentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

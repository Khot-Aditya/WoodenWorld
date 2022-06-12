import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationDrawerComponent } from './components/navigation-drawer/navigation-drawer.component';
import { HeaderNavigationBarComponent } from './components/header-navigation-bar/header-navigation-bar.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { FooterNavigationBarComponent } from './components/footer-navigation-bar/footer-navigation-bar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SortingSectionComponent } from './components/sorting-section/sorting-section.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProfileComponent } from './components/account-components/profile/profile.component';
import { OrdersComponent } from './components/account-components/orders/orders.component';
import { ReviewsComponent } from './components/account-components/reviews/reviews.component';
import { WishlistComponent } from './components/account-components/wishlist/wishlist.component';
import { HistoryComponent } from './components/account-components/history/history.component';
import { AlertsComponent } from './components/account-components/alerts/alerts.component';
import { AddressBookComponent } from './components/account-components/address-book/address-book.component';
import { PaymentOptionsComponent } from './components/account-components/payment-options/payment-options.component';
import { ContactUsComponent } from './components/account-components/contact-us/contact-us.component';
import { HelpComponent } from './components/account-components/help/help.component';
import { SettingsComponent } from './components/account-components/settings/settings.component';
import { AccountNavigationComponent } from './components/account-navigation/account-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationDrawerComponent,
    HeaderNavigationBarComponent,
    ShoppingCartComponent,
    FooterNavigationBarComponent,
    LoginComponent,
    AccountComponent,
    ExploreComponent,
    SortingSectionComponent,
    ProductCardComponent,
    ProfileComponent,
    OrdersComponent,
    ReviewsComponent,
    WishlistComponent,
    HistoryComponent,
    AlertsComponent,
    AddressBookComponent,
    PaymentOptionsComponent,
    ContactUsComponent,
    HelpComponent,
    SettingsComponent,
    AccountNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

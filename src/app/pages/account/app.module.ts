import { ProfileComponent } from './../../components/account-components/profile/profile.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './account-routing.module';

import { AddressBookComponent } from 'src/app/components/account-components/address-book/address-book.component';
import { AlertsComponent } from 'src/app/components/account-components/alerts/alerts.component';
import { ContactUsComponent } from 'src/app/components/account-components/contact-us/contact-us.component';
import { HelpComponent } from 'src/app/components/account-components/help/help.component';
import { HistoryComponent } from 'src/app/components/account-components/history/history.component';
import { OrdersComponent } from 'src/app/components/account-components/orders/orders.component';
import { PaymentOptionsComponent } from 'src/app/components/account-components/payment-options/payment-options.component';
import { ReviewsComponent } from 'src/app/components/account-components/reviews/reviews.component';
import { SettingsComponent } from 'src/app/components/account-components/settings/settings.component';
import { WishlistComponent } from 'src/app/components/account-components/wishlist/wishlist.component';


@NgModule({
  declarations: [
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
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProfileComponent]
})
export class AppModule { }

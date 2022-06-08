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
    SortingSectionComponent
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

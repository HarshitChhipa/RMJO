import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { OffersCarouselComponent } from './Components/offers-carousel/offers-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OffersCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

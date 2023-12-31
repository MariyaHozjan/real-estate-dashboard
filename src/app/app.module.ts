import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RealEstateCardComponent } from './real-estate-card/real-estate-card.component';
import { CreateRealEstateComponent } from './create-real-estate/create-real-estate.component';

@NgModule({
  declarations: [
    AppComponent,
    RealEstateCardComponent,
    CreateRealEstateComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

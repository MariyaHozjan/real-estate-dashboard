import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RealEstateCardComponent } from './real-estate-card/real-estate-card.component';
import { CreateRealEstateComponent } from './create-real-estate/create-real-estate.component';
import { EditRealEstatesComponent } from './edit-real-estates/edit-real-estates.component';
import { ListingsComponent } from './listings/listings.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RealEstateCardComponent,
    CreateRealEstateComponent,
    EditRealEstatesComponent,
    ListingsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

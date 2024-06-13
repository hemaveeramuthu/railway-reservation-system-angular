import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { BillComponent } from './bill/bill.component';
import { LogComponent } from './log/log.component';
import { HttpClientModule } from '@angular/common/http';
import { GeminiDataComponent } from '../gemini-data/gemini-data.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'add', component: AddComponent },
  { path: 'bill', component: BillComponent },
  

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    BookingComponent,
    AdminComponent,
    LoginComponent,
    SearchResultsComponent,
    AddComponent,
    BillComponent,
    LogComponent,
    GeminiDataComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GooglePayButtonModule,
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

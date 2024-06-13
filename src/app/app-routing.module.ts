import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { AdminComponent } from './admin/admin.component';
import { SearchResultsComponent } from './search-results/search-results.component'; 
import { AddComponent } from './add/add.component';
import { BillComponent } from './bill/bill.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'booking/:trainNumber', component: BookingComponent }, // Define the route with a parameter
  { path: 'admin', component: AdminComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'add', component: AddComponent },
  { path: 'bill', component: BillComponent },
  { path: 'log', component: LogComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRealEstatesComponent } from './edit-real-estates/edit-real-estates.component';
import { ListingsComponent } from './listings/listings.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent },
  {
    path: 'edit',
    component: EditRealEstatesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'listings', component: ListingsComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: EditRealEstatesComponent },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

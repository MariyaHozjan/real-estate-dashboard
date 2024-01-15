import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRealEstatesComponent } from './edit-real-estates/edit-real-estates.component';

const routes: Routes = [
  { path: '', redirectTo: '/edit', pathMatch: 'full' }, // Default route
  { path: 'edit', component: EditRealEstatesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

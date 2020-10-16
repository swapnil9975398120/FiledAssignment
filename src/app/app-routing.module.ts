import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationFormComponent } from './application-form/application-form.component';


const routes: Routes = [
  {
    path: 'app-form',
    pathMatch: 'full',
    component: ApplicationFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

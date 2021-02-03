import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCheckedComponent } from './form/form-checked/form-checked.component';
import { FormFinishedComponent } from './form/form-finished/form-finished.component';
import { FormProfileComponent } from './form/form-profile/form-profile.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: '', component: FormComponent, pathMatch: 'full'},
  {path: 'profile', component: FormProfileComponent},
  {path: 'checked', component: FormCheckedComponent},
  {path: 'finished', component: FormFinishedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

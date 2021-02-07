import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { FormCheckedComponent } from './form/form-checked/form-checked.component';
import { FormFinishedComponent } from './form/form-finished/form-finished.component';
import { FormProfileComponent } from './form/form-profile/form-profile.component';
import { FormComponent } from './form/form.component';
import { DepResolver } from './shared/resolvers/dep.resolver';

const routes: Routes = [
  {path: '', component: FormComponent, pathMatch: 'full'},
  {path: 'profile', component: FormProfileComponent},
  {path: 'checked', component: FormCheckedComponent, resolve: {
    departments: DepResolver
  }},
  {path: 'finished', component: FormFinishedComponent},
  {path: 'employee', component: EmployeeComponent, children: [
    {path: 'show', component: ShowEmployeeComponent},
    {path: 'edit', component: EditEmployeeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

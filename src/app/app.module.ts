import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { StepBarComponent } from './step-bar/step-bar.component';
import { FormProfileComponent } from './form/form-profile/form-profile.component';
import { FormCheckedComponent } from './form/form-checked/form-checked.component';
import { FormFinishedComponent } from './form/form-finished/form-finished.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StepService } from './shared/services/step.service';
import { DbService } from './shared/services/db.service';
import { EmployeeService } from './shared/services/employee.service';
import { DepResolver } from './shared/resolvers/dep.resolver';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './employee/show-employee/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { EmpFilterNamePipe } from './shared/pipes/emp-filter-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StepBarComponent,
    FormProfileComponent,
    FormCheckedComponent,
    FormFinishedComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    EditEmployeeComponent,
    DialogComponent,
    EmpFilterNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [
    StepService,
    DbService,
    EmployeeService,
    DepResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

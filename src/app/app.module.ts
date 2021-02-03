import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { StepBarComponent } from './step-bar/step-bar.component';
import { FormProfileComponent } from './form/form-profile/form-profile.component';
import { FormCheckedComponent } from './form/form-checked/form-checked.component';
import { FormFinishedComponent } from './form/form-finished/form-finished.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StepBarComponent,
    FormProfileComponent,
    FormCheckedComponent,
    FormFinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

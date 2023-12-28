import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Edit2NestedFormComponent } from './components/edit2-nested-form/edit2-nested-form.component';
import { NestedArrayComponent } from './components/nested-array/nested-array.component';
import { ArrComponent } from './components/arr/arr.component';
import { AddPersonComponent } from './components/add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    Edit2NestedFormComponent,
    NestedArrayComponent,
    ArrComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

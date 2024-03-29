import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { Edit2NestedFormComponent } from './components/edit2-nested-form/edit2-nested-form.component';
import { NestedArrayComponent } from './components/nested-array/nested-array.component';
import { ArrComponent } from './components/arr/arr.component';
import { AddPersonComponent } from './components/add-person/add-person.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "edit", component: EditComponent},
  {path: "edit-nested", component: Edit2NestedFormComponent},
  {path: "nested-array", component: NestedArrayComponent},
  {path: "arr", component: ArrComponent},
  {path: "add-person", component: AddPersonComponent},
  {path: "", pathMatch: "full" ,redirectTo: "home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

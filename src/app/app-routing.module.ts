import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { Edit2NestedFormComponent } from './components/edit2-nested-form/edit2-nested-form.component';
import { NestedArrayComponent } from './components/nested-array/nested-array.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "edit", component: EditComponent},
  {path: "edit-nested", component: Edit2NestedFormComponent},
  {path: "nested-array", component: NestedArrayComponent},
  {path: "", pathMatch: "full" ,redirectTo: "home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

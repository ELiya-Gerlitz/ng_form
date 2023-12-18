import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "edit", component: EditComponent},
  {path: "", pathMatch: "full" ,redirectTo: "home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

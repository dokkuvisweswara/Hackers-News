import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PerticularComponent } from './perticular/perticular.component';

const routes: Routes = [
  {path:'', redirectTo:'/news', pathMatch:'full'},
  {path:'news', component:MainContentComponent},
  {path:'component/:id', component:PerticularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

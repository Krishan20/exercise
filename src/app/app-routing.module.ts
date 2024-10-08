import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardviewComponent } from './cardview/cardview.component';
import { WorkinprogressComponent } from './workinprogress/workinprogress.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  { path: '', component: CardviewComponent},
  {path: 'login', component:LoginPageComponent},
  {path: 'overview', component: CardviewComponent, pathMatch:"full"},
  {path: 'message', component: WorkinprogressComponent},
  {path: 'search', component: WorkinprogressComponent},
  {path: 'filter', component: WorkinprogressComponent},
  {path: 'history', component: WorkinprogressComponent},
  {path: 'myAccount', component: WorkinprogressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

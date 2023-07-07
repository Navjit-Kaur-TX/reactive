import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './Forms/reactive/reactive.component';
import { TemplateDrivenComponent } from './Forms/template-driven/template-driven.component';

export const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenComponent
  },
  {
    path: 'templateDriven',
    component: TemplateDrivenComponent
  },
  {
    path: 'reactiveForms',
    component: ReactiveComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

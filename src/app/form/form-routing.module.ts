import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormAnswerComponent } from './components/form-answer/form-answer.component';

const routes: Routes = [
  {
    path: 'builder',
    component: FormBuilderComponent
  },
  {
    path: 'answer',
    component: FormAnswerComponent
  },
  {
    path: '',
    redirectTo: 'builder'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }

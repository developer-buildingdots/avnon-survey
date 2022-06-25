import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';

import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormAnswerComponent } from './components/form-answer/form-answer.component';

import { FormManagerService } from './services/form-manager.service';
import { FormQuestionComponent } from './components/form-question/form-question.component';


@NgModule({
  declarations: [
    FormBuilderComponent,
    FormAnswerComponent,
    FormQuestionComponent
  ],
  providers: [
    FormManagerService
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule
  ]
})
export class DyamicFormModule { }

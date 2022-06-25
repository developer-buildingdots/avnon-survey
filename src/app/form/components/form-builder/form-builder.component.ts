import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

import { FormQuestionComponent }  from '../form-question/form-question.component'

import { Question } from '../../form.interfaces'
import { FormManagerService } from '../../services/form-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  questions: Question[] = [];

  form = this.fb.group({
    answers: this.fb.array([])
  })

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private formService: FormManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.questions = this.formService.getValue();
  }

  addQuestion(): void {
    const dialogRef = this.dialog.open(FormQuestionComponent, {
      width: '50%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.addAnswerType(result);
        this.questions.push(result);
      }
    });
  }

  submit() {
    if(this.form.valid){
      this.questions = this.questions.map((q, i) => {
        if(q.type === 'checkbox') {
          q.answer = q.options.filter((v, ix) => this.form.value.answers[i][ix])
        } else {
          q.answer = this.form.value.answers[i];
        }
        return q;
      })
      this.formService.setValue(this.questions)
      this.router.navigateByUrl('/form/answer')
    }
  }

  get answers(): FormArray {
    return this.form.get('answers') as FormArray;
  }

  private addAnswerType(result) {
    if(result.type === 'checkbox'){
      const ar = this.fb.array([]);
      result.options.forEach(element => {
        ar.push(this.fb.control(false));
      });
      this.answers.push(ar);
    } else {
      this.answers.push(this.fb.control('',Validators.required));
    }
  }
}

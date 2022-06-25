import { Component, Inject } from '@angular/core';
import { FORM_TYPES } from '../../constants'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from '../../form.interfaces'
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.scss']
})
export class FormQuestionComponent {

  types: typeof FORM_TYPES = FORM_TYPES;

  questionForm = this.fb.group({
    question: ['', Validators.required],
    type: ['', Validators.required],
    options: this.fb.array([])
  })

  constructor(
    public dialogRef: MatDialogRef<FormQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private fb: FormBuilder,
    ) { }


  ngOnInit(): void {
    this.questionForm.get('type').valueChanges.subscribe((value => {
      if(this.containsOptions() && !this.options.value.length) {
        this.addMoreOptions()
      }
    }))
  }

  close(): void {
    if(this.questionForm.valid){
      this.dialogRef.close(this.questionForm.value);
    }
  }

  containsOptions(): boolean {
    return ['radio', 'checkbox'].includes(this.questionForm.get('type').value)
  }


  get options():FormArray {
    return <FormArray> this.questionForm.get('options');
  }

  addMoreOptions(): void {
    this.options.push(this.addOptionField());
  }

  private addOptionField() {
    return this.fb.control('', Validators.required)
  }
}

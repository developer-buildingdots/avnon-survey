import { Component, OnInit } from '@angular/core';
import { FormManagerService } from '../../services/form-manager.service';

@Component({
  selector: 'app-form-answer',
  templateUrl: './form-answer.component.html',
  styleUrls: ['./form-answer.component.scss']
})
export class FormAnswerComponent implements OnInit {

  questions = [];
  constructor(private formServive: FormManagerService) { }

  ngOnInit(): void {
    this.questions = this.formServive.getValue()
  }

}

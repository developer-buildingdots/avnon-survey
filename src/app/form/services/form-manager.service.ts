import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormManagerService {

  question = [];
  constructor() { }

  setValue(questions) {
    this.question = questions;
  }

  getValue() {
    return this.question;
  }
}

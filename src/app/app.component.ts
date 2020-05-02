import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-consumer';
  inputVal = '';
  myform: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myform = this.fb.group({
      identification : this.fb.group({
        name: ['', [ Validators.required, Validators.pattern(/\d/)]]
      })
    });
  }

  get NameControl() {
    return this.myform.get('identification').get('name');
  }
}

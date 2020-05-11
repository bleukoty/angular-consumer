import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService, IFolder } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-consumer';
  inputVal = '';
  myform: FormGroup;
  data: Array<IFolder>;

  constructor(private fb: FormBuilder, private dataS: DataService) {
    this.myform = this.fb.group({
      identification : this.fb.group({
        name: ['', [ Validators.required, Validators.pattern(/\d/)]]
      })
    });
    this.dataS.getData().subscribe(data => this.data = data);
  }

  get NameControl() {
    return this.myform.get('identification').get('name');
  }
}

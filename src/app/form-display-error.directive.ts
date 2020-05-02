import { Directive, Input, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormDisplayErrorService } from './form-display-error.service';

@Directive({
  selector: '[appFormDisplayError]'
})
export class FormDisplayErrorDirective implements OnInit {

  @Input() validationMsgId: string;
  @Input() id: string;

  // input control
  @Input() control: FormControl;
  @Input() formControlName: string;

  // error span
  errorSpanId: string;

  // inline style
  private inlineStyle = `color: red; display: block; font-size: 9pt`;

  constructor(private mainService: FormDisplayErrorService) { }

  ngOnInit() {
    this.errorSpanId = `span-error-${this.id}-${new Date()}`;
    this.control.statusChanges
      .subscribe(status => {
        if (status === 'INVALID') {
          this.showErrors();
        } else {
          this.removeErrors();
        }
      });
  }

  @HostListener('blur', ['$event'])
  handleBlurEvent(event) {
    if (this.control.value == null || this.control.value === '') {
      if (this.control.errors) {
        this.showErrors();
      } else {
        this.removeErrors();
      }
    }
  }

  private showErrors() {
    this.removeErrors();
    const errors = this.mainService.getListOfMessage(Object.keys(this.control.errors).map(key => `${key}_${this.formControlName}`));
    const htmlErrors = errors.map(x => 'ⓘ ' + x).join('<br/>');
    const errSpan = `<span class="error-message" style="${this.inlineStyle}" id="${this.errorSpanId}">${htmlErrors}</span>`;
    document.getElementById(this.id).parentElement.insertAdjacentHTML('beforeend', errSpan);
  }

  private removeErrors() {
    const errorElement = document.getElementById(this.errorSpanId);
    if (errorElement) {
      errorElement.remove();
    }
  }
}

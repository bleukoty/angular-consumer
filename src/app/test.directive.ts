import { Directive, Input, OnChanges, OnInit, HostListener, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[number]'
})
export class NumberDirective implements OnChanges {
  @Input() public number: any;
  @Input() public input: any;

  ngOnChanges(changes) {
    if (changes.input) {
      console.log('input changed');
    }
  }
}

@Directive({
  selector: '[appTest]',
})
export class TestDirective implements OnInit {
  pattern = /\d{2}/g;

  @Input() control: FormControl;
  @Input() formControlName: string;

  // @Input() appTest;
  // @HostBinding()
  // @Input() value = '';
  // @HostBinding()
  // @Input() maxLength = 11;

  constructor() {
    console.log('ça marche !!');
  }
  ngOnInit(): void {
 
    this.control.statusChanges.subscribe(status => {
      console.log('status ', status);
    });
  }

  @HostListener('error', ['$event.target']) detectError(input) {
    console.log('there is an error in the input');
  }



  // @HostListener('keyup', ['$event.target']) onKeyUpEvent(input: any) {
  //   let value = input.value.replace(/\D/g, '');
  //   if (value.length > 0) {
  //     let macths: any;
  //     let result = [];

  //     do {
  //       macths = value.match(this.pattern);
  //       if (macths) {
  //         result = macths;
  //         value = value.replace(this.pattern, '');
  //       } else {
  //         result.push(value);
  //         value = null;
  //       }
  //     } while (value);

  //     // formatted value
  //     input.value = result.join(' ');
  //   } else {
  //     input.value = value;
  //   }
  // }
}


// @Directive({
//   selector: '[appTest]',
// })
// export class TestDirective implements OnChanges {


//   @Input() public number: any;
//   @Input() public input: any;

//   ngOnChanges(changes) {
//     if (changes.input) {
//       console.log('input changed');
//     }
//   }

  // @Input() public value: string;
  // @Input() public xxx: any;

  // constructor(private element: ElementRef) {
  //   console.log('test');
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  // }

  // @HostListener('mouseenter') applyBackgroundColor() {
  //   console.log('survol');
  // }

  // @HostListener('keyup') onKeyUp() {
  //   console.log('key up');
  //   console.log('tout', this.xxx);
  // }
//}

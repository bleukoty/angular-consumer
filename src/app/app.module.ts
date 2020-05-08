import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TelephoneNumberFormatterModule, TelephoneNumberFormatterComponent } from 'telephone-number-formatter';
import { PhoneFormatterModule } from '@sir_koty/phone-formatter';
import { TestOptimalComponent } from 'test-optimal';

// import { PhoneFormatterModule } from 'phone-formatter';
import { NumberDirective, TestDirective } from './test.directive';
// import { DigitFormatterModule} from 'digit-formatter';
import {FormErrorDisplayerService, FormErrorDisplayerModule} from '@sir_koty/form-error-displayer';
import { DocumentViewerComponent, Test2Component , DocumentViewerModule} from 'document-viewer';
import { CommonModule } from '@angular/common';
const d = [
  { key: 'required_name', message: 'le champ "nom" est obiglatoire.' },
  { key: 'pattern_name', message: 'la valeur saisie ne correspond pas au format attendu pour le champ "nom"' },
  { key: 'pattern_match_fisrt_name', message: 'le champ ne correspond pas au format attendu' },

];

const service = new FormErrorDisplayerService(d); // Chargement des erreurs
// service.setErrorList(d);

@NgModule({
  declarations: [
    AppComponent,
    NumberDirective,
    TestDirective,
    TestOptimalComponent,
    Test2Component
   // FormDisplayErrorDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
   // TelephoneNumberFormatterModule,
    PhoneFormatterModule,
    FormsModule,
    ReactiveFormsModule,
    FormErrorDisplayerModule,
    // DigitFormatterModule,
    // DocumentViewerModule
  ],
 //  entryComponents: [DocumentViewerComponent],
  providers: [{ provide: FormErrorDisplayerService, useValue: service }],
  bootstrap: [AppComponent]
})
export class AppModule { }

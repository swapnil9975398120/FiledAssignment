import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { validate } from 'json-schema';
import { AppForm } from '../models/app-form';
import { AppFormService } from '../service/app-form.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  localStorageChanges$ = this.localStorageService.changes$;
  key:any;
  retriveData : Array<any> = []
  dateDisplay:any;

  appForm = new FormGroup({
    cardNumber: new FormControl(),
    cardHolder: new FormControl(),
    expirationDate: new FormControl(),
    securityCode: new FormControl(),
    amount: new FormControl(),

  });
  displayZeroValidation: boolean = false;
  constructor(   
     private formBuilder: FormBuilder,
     private localStorageService : AppFormService
    ) { }

  ngOnInit(): void {

     this.validate();

  }

  amountValid() {
    if(this.appForm.controls.amount.value == 0){
      this.displayZeroValidation = true;
    } else {
      this.displayZeroValidation = false;

    }
  }

  validate() {
    this.appForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required]],
      cardHolder: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      securityCode: ['', [Validators.maxLength(3)]],
      amount: ['', [Validators.required]],
     
    });

  }
  // persist(key: string, value: any) {
  //   this.localStorageService.set(key, value);
  // }
  addAppFormInfo() {
        const data = new AppForm ({
          cardNumber : this.appForm.controls.cardNumber.value,
          cardHolder :this.appForm.controls.cardHolder.value,
          expirationDate : this.appForm.controls.expirationDate.value,
          securityCode : this.appForm.controls.securityCode.value,
          amount : this.appForm.controls.amount.value,
        });
          this.localStorageService.set(this.key,JSON.stringify(data));
          this.retriveData.push(JSON.parse(this.localStorageService.get(this.key)));
          this.appForm.reset();
        
  }

  getAppFormInfo(){
    this.localStorageService.get('');
     

  }
}

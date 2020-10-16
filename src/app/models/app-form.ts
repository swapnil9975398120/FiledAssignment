export class AppForm {
    cardNumber = '';
    cardHolder = '';
    expirationDate;
    securityCode = '';
    amount ;

  
    constructor(option?: {
        cardNumber: string,
        cardHolder: string,
        expirationDate: Date,
        securityCode: string,
        amount:number,


    }) {
      this.cardNumber = option.cardNumber;
      this.cardHolder = option.cardHolder;
      this.expirationDate = option.expirationDate;
      this.securityCode = option.securityCode;
      this.amount = option.amount;

    }

}

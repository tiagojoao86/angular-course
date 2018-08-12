
export class CounterService{

    amountActive: number = 0;
    amountInactive: number = 0;

    logActive(){
        this.amountActive++;
        console.log("Active Actions: "+this.amountActive);       
    }

    logInactive(){
        this.amountInactive++;
        console.log("Inactive Actions: "+this.amountInactive);
    }

    

}
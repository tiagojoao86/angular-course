
export class LogService{

    amount: number = 0;

    logChangeStatus(){
        this.amount++;
        console.log(this.amount);
    }

    

}
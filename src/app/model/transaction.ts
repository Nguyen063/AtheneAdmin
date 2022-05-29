export class Transaction{
    TransInfo=Object({
        TransId:String,
        DateCreate:Date,
    Fee:String,
    Content:String,
    Method:String,
    });
    ReceivableAcc=Object({
        Bank:String,
        STK:Number,
    });
    SendAcc=Object({
        Bank:String,
        STK:Number,
    })
    
    constructor(){
        this.TransInfo.TransId="";
        this.TransInfo.Fee="";
        this.TransInfo.DateCreate="";
        this.TransInfo.Method="";
        this.TransInfo.Content="";
        this.ReceivableAcc.Bank="";
        this.ReceivableAcc.STK="";
        this.SendAcc.Bank="";
        this.SendAcc.STK="";
    }


}
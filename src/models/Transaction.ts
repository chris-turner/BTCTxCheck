class Transaction {

    constructor(newTxID: string,newTxDesc: string,newConfirmations: number,newConfirmationsToAlertOn: number )
    {
        this.txID = newTxID;
        this.txDesc = newTxDesc;
        this.confirmations = newConfirmations;
        this.confirmationsToAlertOn = newConfirmationsToAlertOn;
    }

    public txID: string = '';
    public txDesc: string = '';
    public confirmations: number = 0;
    public confirmationsToAlertOn: number = 0;

}

export default Transaction;
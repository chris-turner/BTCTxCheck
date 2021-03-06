import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
import React from 'react';
import './AddTx.css';
import logo from '../logo.png'
import Transaction from '../models/Transaction';
import DataAccess from '../models/DataAccess';

class AddTx extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
    this.state = { newTxId: '', newTxDesc: '', newTxConfNum: 0 };

    this.handleTxIdChange = this.handleTxIdChange.bind(this);
    this.handleTxDescChange = this.handleTxDescChange.bind(this);
    this.handleConfNumChange = this.handleConfNumChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTxIdChange(event: any) {
    this.setState({ newTxId: event.target.value });
  }
  handleTxDescChange(event: any) {
    this.setState({ newTxDesc: event.target.value });
  }
  handleConfNumChange(event: any) {
    this.setState({ newTxConfNum: event.target.value });
  }

  handleSubmit(event: any) {
    let errorMsg = this.validateTxData();
    if (errorMsg != '') {
      alert(errorMsg);
    }
    else {
      addTransaction(this.state.newTxId, this.state.newTxConfNum, this.state.newTxDesc);
    }

    event.preventDefault();
  }

  validateTxData() {
    let errorMsg = '';
    if (!this.state.newTxId) {
      errorMsg += '\nTransaction ID cannot be blank';
    }
alert(this.state.newTxDesc)
    if (!this.state.newTxDesc) {
      errorMsg += '\nTransaction Description cannot be blank';
    }

    if (!this.state.newTxConfNum) {
      errorMsg += '\nNumber of Confirmations cannot be blank';
    }
    return errorMsg;
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            {/* <IonTitle>BTC Transaction Check</IonTitle> */}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard className="welcome-card">
            {/* <img src={logo} alt="" />

            <IonCardContent>
              <IonCardSubtitle style={{ fontWeight: 'bold', color: 'black' }}>Bitcoin Transaction Check</IonCardSubtitle>
              <p>
                Tired of refreshing your block explorer to check if your transaction has been confirmed? Add a transaction to get notified when it's been confirmed on the blockchain.
            </p>
            </IonCardContent> */}
          </IonCard>
          <form onSubmit={this.handleSubmit}>
            <IonItem>
              <IonLabel position="stacked">Transaction ID</IonLabel>
              <IonInput placeholder="Transaction ID" type="text" onInput={this.handleTxIdChange} name="txIDInput"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Transaction Description</IonLabel>
              <IonInput placeholder="Description for your tx" name="txDescInput" onInput={this.handleTxDescChange}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Notify after</IonLabel>
              <IonInput placeholder="#" onInput={this.handleConfNumChange}></IonInput>
              <IonLabel>confirmations</IonLabel>
            </IonItem>
            <IonButton expand="block" fill="outline" type="submit">Add Transaction</IonButton>
          </form>
        </IonContent>
      </IonPage>
    );
  }

};

function addTransaction(txID: string, txConfNums: number, txDesc: string) {
  let tx: Transaction;
  let da: DataAccess = new DataAccess();
  fetch('https://api.blockcypher.com/v1/btc/main/txs/' + txID).then(response => response.json())
    .then(function newTx(data) {
      if (data.error.includes('not found')) {
        tx = new Transaction(txID, txDesc, data.confirmations, txConfNums)
        alert('Invalid Tx');

        //remove below later
        da.setObject(txID, tx)
        .then((val: any) => alert('Tx added! You will be alerted after ' + tx.confirmationsToAlertOn + ' confirmations.'))
        
      }
      else {
        tx = new Transaction(txID, txDesc, data.confirmations, txConfNums)
        da.getObject(txID).then((val: any) => {
          if (val != null) {
            alert('You have already added this transaction.');
          }
          else {
            da.setObject(txID, tx)
              .then((val: any) => alert('Tx added! You will be alerted after ' + tx.confirmationsToAlertOn + ' confirmations.'))
              
    window.location.reload(false);
          }
        });
      }
    })
}

export default AddTx;

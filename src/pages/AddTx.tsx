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

class AddTx extends React.Component<{},any> {

  constructor(props: any) {
    super(props);
    this.state = { newTxId: '', newTxDesc: '', newTxConfNum: 0};
    
    this.handleTxIdChange = this.handleTxIdChange.bind(this);
    this.handleTxDescChange = this.handleTxDescChange.bind(this);
    this.handleConfNumChange = this.handleConfNumChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTxIdChange(event:any) {
    this.setState({newTxId: event.target.value});
  }
  handleTxDescChange(event:any) {
    this.setState({newTxDesc: event.target.value});
  }
  handleConfNumChange(event:any) {
    this.setState({newTxConfNum: event.target.value});
  }

  handleSubmit(event:any) {
    alert('Tx ID: ' + this.state.newTxId + ' conf num: ' + this.state.newTxConfNum + ' tx desc:' + this.state.newTxDesc);
   event.preventDefault();
  }
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>BTC Transaction Check</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard className="welcome-card">
            <img src={logo} alt="" />

            <IonCardContent>
              <IonCardSubtitle style={{ fontWeight: 'bold', color: 'black' }}>Bitcoin Transaction Check</IonCardSubtitle>
              <p>
                Tired of refreshing your block explorer to check if your transaction has been confirmed? Add a transaction to get notified when it's been confirmed on the blockchain.
            </p>
            </IonCardContent>
          </IonCard>
          <form onSubmit={this.handleSubmit}>
          <IonItem>
            <IonLabel position="stacked">Transaction ID</IonLabel>
            <IonInput placeholder="Transaction ID" type="text"  onInput={this.handleTxIdChange} name="txIDInput"></IonInput>
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

  txDescChange() {

  }

};

function addTransaction() {

}

export default AddTx;

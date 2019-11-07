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
    this.state = { newTxId: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event:any) {
    this.setState({newTxId: event.target.value});
  }
  handleSubmit(event:any) {
    alert('Tx ID: ' + this.state.newTxId);
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
            <IonInput placeholder="Transaction ID" type="text" value={this.state.newTxId} onInput={this.handleChange} name="txIDInput"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Transaction Description</IonLabel>
            <IonInput placeholder="Description for your tx" name="txDescInput" onChange={this.txDescChange}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Notify after</IonLabel>
            <IonInput placeholder="#"></IonInput>
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

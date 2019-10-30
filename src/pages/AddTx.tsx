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

class AddTx extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      newTxId: ''
    };

    this.txDescChange = this.txDescChange.bind(this);
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

          <IonItem>
            <IonLabel position="stacked">Transaction ID</IonLabel>
            <IonInput placeholder="Transaction ID" name="txIDInput"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Transaction Description</IonLabel>
            <IonInput placeholder="Description for your tx" name="txDescInput" onChange={this.txDescChange}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Notify after</IonLabel>
            {/* <IonSelect
          placeholder="0">
          <IonSelectOption value="1">1</IonSelectOption>
          <IonSelectOption value="2">2</IonSelectOption>
          <IonSelectOption value="3">3</IonSelectOption>
          <IonSelectOption value="4">4</IonSelectOption>
          <IonSelectOption value="5">5</IonSelectOption>
       </IonSelect> */}
            <IonInput placeholder="#"></IonInput>
            <IonLabel>confirmations</IonLabel>
          </IonItem>
          <IonButton expand="block" fill="outline" onClick={addTransaction}>Add Transaction</IonButton>

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

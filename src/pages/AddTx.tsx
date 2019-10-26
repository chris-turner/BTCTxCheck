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
import { add } from 'ionicons/icons';
import React from 'react';
import './AddTx.css';

class AddTx extends React.Component {
  

  render(){
   return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BTC Transaction Check</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="https://image.shutterstock.com/image-vector/bitcoin-logo-currency-crypto-here-260nw-767986060.jpg" alt="" />
          
          <IonCardContent>
          <IonCardSubtitle>Bitcoin Transaction Check</IonCardSubtitle>
            <p>
              Tired of refreshing your block explorer? Add a transaction to get notified when it's been confirmed on the blockchain.
            </p>
          </IonCardContent>
        </IonCard>
      
        <IonItem>
      <IonLabel position="stacked">Transaction ID</IonLabel>
      <IonInput placeholder="Transaction ID" name="txIDInput"></IonInput>
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
       <IonInput></IonInput>
        <IonLabel>confirmations</IonLabel>
      </IonItem>
    <IonButton expand="block" fill="outline">Add Transaction</IonButton>

      </IonContent>
    </IonPage>
  );
}




};


export default AddTx;

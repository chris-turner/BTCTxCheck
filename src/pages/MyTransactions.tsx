import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import txData from '../Transactions.js';

const mytransactions: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Transactions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
             {txData.map(tx => 
              <IonItem routerLink={"/mytransactions/txdetails/"+tx.hash}>
             <IonLabel>
             {tx.description} 
             </IonLabel>
          </IonItem>)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default mytransactions;
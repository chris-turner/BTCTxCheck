import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';

class TxDetails extends React.Component<{},any> {
  constructor(props: any) {
    super(props);
    this.state = {
      txId : props.match.params.id
  }
  }
  
  render(){ 
    return (<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/mytransactions" />
          </IonButtons>
          <IonTitle>Transaction Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>{this.state.txId}</p>
      </IonContent>
    </IonPage>
  );
  }
};

export default TxDetails;

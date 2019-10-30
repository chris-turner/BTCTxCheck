import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Details: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/mytransactions" />
          </IonButtons>
          <IonTitle>Transaction Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>{props.name}</p>
      </IonContent>
    </IonPage>
  );
};

export default Details;

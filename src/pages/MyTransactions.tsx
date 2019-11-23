import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import txData from '../Transactions.js';
import DataAccess from '../models/DataAccess';

let da: DataAccess = new DataAccess(); 
let transactions: string[] = [];
//da.clear();

class mytransactions extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>My Transactions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {da.getKeys().then((keys:string[]) =>
            keys.forEach(key =>
            da.getItem(key).then((tx:any) => transactions.push(tx))))
            .then(() =>
            transactions.map(tx =>
              <IonItem routerLink={"/mytransactions/txdetails/" + tx}>
                <IonLabel>
                  {tx}
                </IonLabel>
              </IonItem>))
              }
            
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
}
export default mytransactions;

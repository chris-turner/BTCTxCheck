import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import txData from '../Transactions.js';
import Transaction from '../models/Transaction';
import DataAccess from '../models/DataAccess';

class mytransactions extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
    this.state = { da: new DataAccess(), transactions: [] };
  }

  componentDidMount() {
    this.getTransactions();
  }

  componentDidUpdate(){
    
  }


  getTransactions() {
    this.state.da.getKeys().then((keys: string[]) =>

      keys.forEach(key =>
        this.state.da.getItem(key).then((tx: string) => {
          this.setState((prevState: any) => {
            let newState = prevState;
            newState.transactions = prevState.transactions.concat(tx);
            return newState;
          });
        })
      )
    )
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
            {
              this.state.transactions.map((tx: Transaction) =>
                <IonItem routerLink={"/mytransactions/txdetails/" + tx.txID}>
                  <IonLabel>
                    {tx.txDesc}
                  </IonLabel>
                </IonItem>)
            }

          </IonList>
        </IonContent>
      </IonPage>
    );
  };
}
export default mytransactions;

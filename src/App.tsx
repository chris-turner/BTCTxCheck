import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { add, apps, settings } from 'ionicons/icons';
import AddTx from './pages/AddTx';
import MyTransactions from './pages/MyTransactions';
import Settings from './pages/Settings';
import Details from './pages/TxDetails';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { logoBitcoin } from 'ionicons/icons';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/AddTx" component={AddTx} exact={true} />
          <Route path="/mytransactions" component={MyTransactions} exact={true} />
          <Route path="/mytransactions/txdetails" component={Details} />
          <Route path="/settings" component={Settings} />
          <Route path="/" render={() => <Redirect to="/AddTx" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Add Tx" href="/AddTx">
            <IonIcon icon={add} />
            <IonLabel>Add Transaction</IonLabel>
          </IonTabButton>
          <IonTabButton tab="My Transactions" href="/MyTransactions">
            <IonIcon icon={logoBitcoin} />
            <IonLabel>My Transactions</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Settings" href="/Settings">
            <IonIcon icon={settings} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';


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
import Login from './components/Login/Login';
import Home from './pages/Home/Home';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect exact from="/" to="/login" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </IonApp>
);

export default App;

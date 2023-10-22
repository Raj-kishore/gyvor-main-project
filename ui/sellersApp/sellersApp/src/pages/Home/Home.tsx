import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { playCircle, radio, library, search, homeOutline, flagOutline, personCircle, personCircleOutline, searchOutline, briefcaseOutline } from 'ionicons/icons';
import AccountPage from '../Tabs/Account/AccountPage';
import RidesPage from '../Tabs/Rides/RidesPage';
import ManagePage from '../Tabs/Manage/ManagePage';



function Home() {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Redirect exact path="/home" to="/manage" />
                    {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
                    <Route
                        path="/account"
                        render={() => <AccountPage />}
                        exact={true}
                    />
                    <Route path="/manage" render={() => <ManagePage />} exact={true} />
                    <Route path="/rides" render={() => <RidesPage />} exact={true} />

                    {/* <Route path="/home" render={() => <HomePage />} exact={true} />
                    <Route path="/radio" render={() => <RadioPage />} exact={true} />
                    <Route path="/library" render={() => <LibraryPage />} exact={true} />
                    <Route path="/search" render={() => <SearchPage />} exact={true} /> */}
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="search" href="/manage">
                        <IonIcon icon={briefcaseOutline} />
                        <IonLabel>Manage</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="rides" href="/rides">
                        <IonIcon icon={flagOutline} />
                        <IonLabel>Rides</IonLabel>
                    </IonTabButton>


                    <IonTabButton tab="account" href="/account">
                        <IonIcon icon={personCircle} />
                        <IonLabel>Account</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
}
export default Home;
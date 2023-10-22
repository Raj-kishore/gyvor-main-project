import React from 'react';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonRippleEffect,
    IonThumbnail,
} from '@ionic/react';

import './AccountPage.css';
import { cashOutline, documentsOutline, logOutOutline } from 'ionicons/icons';

function AccountPage() {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Pradeep Rentals</IonCardTitle>
                <IonCardSubtitle>+91-7683922389</IonCardSubtitle>

                <IonCardSubtitle>@pradeep_rentals11</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    <IonItem>

                        <IonIcon aria-hidden="true" icon={cashOutline} slot="start"></IonIcon>
                        <IonLabel>Earnings</IonLabel>


                    </IonItem>
                    <IonItem>

                        <IonIcon aria-hidden="true" icon={documentsOutline} slot="start"></IonIcon>
                        <IonLabel>Documents</IonLabel>


                    </IonItem>
                    <IonItem>
                        <IonIcon aria-hidden="true" icon={logOutOutline} slot="start"></IonIcon>
                        <IonLabel>Logout</IonLabel>
                    </IonItem>


                </IonList>

            </IonCardContent>
        </IonCard>
    );
}
export default AccountPage;
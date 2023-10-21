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
import { documentsOutline, logOutOutline } from 'ionicons/icons';

function AccountPage() {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Rajkishor Maharana</IonCardTitle>
                <IonCardSubtitle>+91-7683922389</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
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
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function Card() {
    return (
        <IonCard>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
                <IonCardTitle>Scooty Activa</IonCardTitle>
                <IonCardSubtitle>Rs. 200/day</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>The scooty is 5 years old and bla bla.</IonCardContent>
        </IonCard>
    );
}
export default Card;
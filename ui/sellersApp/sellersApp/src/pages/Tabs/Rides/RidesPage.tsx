import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonItem, IonItemDivider, IonLabel, IonList, IonListHeader, IonRow } from '@ionic/react';

function RidesPage() {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>3</IonCardTitle>
                <IonCardSubtitle>total rents</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>

                <IonList>
                    <IonListHeader>
                        <IonLabel>Rides History</IonLabel>
                    </IonListHeader>
                    <IonItem>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Ashish Bisoyi</IonLabel>

                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>ID #D1LKAJ3234K</IonLabel>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonItem>
                    <IonItem>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Ashish Bisoyi</IonLabel>

                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>ID #D1LKAJ3234K</IonLabel>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonItem>
                    <IonItem>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Ashish Bisoyi</IonLabel>

                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>ID #D1LKAJ3234K</IonLabel>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonItem>
                </IonList>

            </IonCardContent>
        </IonCard>

    );
}
export default RidesPage;
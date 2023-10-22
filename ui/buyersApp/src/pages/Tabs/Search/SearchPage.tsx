
import React from 'react';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonRippleEffect,
    IonThumbnail,
    IonToolbar,
} from '@ionic/react';

import './SearchPage.css'

import { documentsOutline, logOutOutline } from 'ionicons/icons';
import SearchBar from '../../../components/Search/SearchBar';
import Card from '../../../components/Card/Card';

function AccountPage() {
    return (
        <>
            <IonHeader collapse="fade">
                <IonToolbar>
                    <SearchBar></SearchBar>
                </IonToolbar>


            </IonHeader >
            <IonContent className="ion-padding ">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />


            </IonContent>

        </>
    );
}
export default AccountPage;
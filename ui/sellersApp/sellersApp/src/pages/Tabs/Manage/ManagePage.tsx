
import React, { useRef, useState } from 'react';
import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonRippleEffect,
    IonTextarea,
    IonThumbnail,
    IonTitle,
    IonToolbar,
} from '@ionic/react';

import './ManagePage.css'

import { add, chevronUpCircle, documentsOutline, logOutOutline } from 'ionicons/icons';
import SearchBar from '../../../components/Search/SearchBar';
import Card from '../../../components/Card/Card';
import { OverlayEventDetail } from '@ionic/core/components';
function AccountPage() {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState(
        'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );

    function confirm(ev: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) {

        setIsOpen(false);

    }
    return (
        <>
            <IonHeader collapse="fade">
                <IonToolbar>
                    <SearchBar></SearchBar>
                </IonToolbar>


            </IonHeader >
            <IonContent className="ion-padding  ">
                <div className='managePage-wrapper'>
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


                    <IonFab className='addBtn' slot="fixed" vertical="bottom" horizontal="end">
                        <IonFabButton onClick={() => setIsOpen(true)} >
                            <IonIcon icon={add}></IonIcon>
                        </IonFabButton>
                    </IonFab>

                    <IonModal isOpen={isOpen}>
                        <IonHeader>
                            <IonToolbar>
                                <IonButtons slot="start">
                                    <IonButton onClick={() => setIsOpen(false)}> Cancel</IonButton>
                                </IonButtons>
                                {/* <IonTitle>Welcome</IonTitle> */}
                                <IonButtons slot="end">
                                    <IonButton strong={true} onClick={(e) => confirm(e)}>
                                        Add to Shop
                                    </IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent className="ion-padding">
                            <div className='managePage-modal-wrapper'>
                                <div className='ion-items-wrapper'>
                                    <IonItem>
                                        <IonInput
                                            label="Vehicle type"
                                            labelPlacement="stacked"
                                            ref={input}
                                            type="text"
                                            placeholder="Example. Truck, Bike, Car, Cycle etc."
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            label="Model name"
                                            labelPlacement="stacked"
                                            ref={input}
                                            type="text"
                                            placeholder="Example. Hayabusa "
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            label="Brand name"
                                            labelPlacement="stacked"
                                            ref={input}
                                            type="text"
                                            placeholder="Example. Suzuki "
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            label="Rent per day"
                                            labelPlacement="stacked"
                                            ref={input}
                                            type="text"
                                            placeholder="Example. 999 "
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonInput
                                            label="Year"
                                            labelPlacement="stacked"
                                            ref={input}
                                            type="tel"
                                            maxlength={4}
                                            placeholder="Example. 2016 "
                                        />
                                    </IonItem>

                                    <IonItem>
                                        <IonInput
                                            label="Km driven"
                                            labelPlacement="stacked"
                                            ref={input}
                                            pattern="[0-9]*"
                                            type="tel"
                                            placeholder="Example. 22000  "
                                        />
                                    </IonItem>
                                    <IonItem>
                                        <IonTextarea label="Description" placeholder="Type something here"></IonTextarea>
                                    </IonItem>


                                </div>
                            </div>
                        </IonContent>
                    </IonModal>
                </div>

            </IonContent >

        </>
    );
}
export default AccountPage;
import React, { useState, useRef } from 'react';
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonItem,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import './Login.css';
import { useMaskito } from '@maskito/react';
import Otp from '../OTP/Otp';


function Home() {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);





    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {

        }
    }
    const phoneMask = useMaskito({
        options: {
            mask: ['+', '9', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        },
    });
    return (
        <IonPage id="login-component login-screen">


            <IonContent className="ion-padding login-screen">
                <div className="myClass">
                    <div className='logo-wrapper'>
                        <div className='logo'>
                            Gyvor.com
                        </div>
                        <div className='slogan'>
                            Looking for a bike?
                        </div>
                        <div className='short-about'>
                            We provide range of bikes for rent accross the metro cities.
                            Our bikes are quality checked with proper documents. We value
                            all the precautions and hoping you have a great journey with our
                            service.
                            <hr />
                            Feel free to sign in and have a great journey ahead.
                        </div>
                    </div>

                    <IonButton id="open-modal" expand="block">
                        Login
                    </IonButton>
                    <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
                        <IonHeader>
                            <IonToolbar>
                                <IonButtons slot="start">
                                    <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                                </IonButtons>
                                <IonTitle>Welcome</IonTitle>
                                <IonButtons slot="end">
                                    <IonButton strong={true} onClick={() => confirm()}>
                                        Send OTP
                                    </IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent className="ion-padding">

                            <IonItem>
                                <IonInput
                                    label="Enter your Phone number"
                                    labelPlacement="stacked"
                                    type="tel"
                                    ref={async (phoneInput) => {
                                        if (phoneInput) {
                                            const input = await phoneInput.getInputElement();
                                            phoneMask(input);
                                        }
                                    }}

                                    placeholder="+91 (xxx) xxx-xxxx"
                                />
                            </IonItem>

                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Enter your OTP</IonCardTitle>
                                    <IonCardSubtitle>An OTP has been sent to this phone number.</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <Otp />

                                </IonCardContent>

                                {/* <IonButton fill="clear">Submit</IonButton> */}
                            </IonCard>
                        </IonContent>
                    </IonModal>
                </div>
            </IonContent>


        </IonPage>
    );
}

export default Home;
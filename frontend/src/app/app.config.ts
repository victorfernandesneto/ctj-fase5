import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"fase5-ctj-fiap","appId":"1:827437669729:web:773abe722f4e1c5b60f920","storageBucket":"fase5-ctj-fiap.appspot.com","apiKey":"AIzaSyAEehOILfG2Rot7EGff7kzwAM7U1Nq6yBQ","authDomain":"fase5-ctj-fiap.firebaseapp.com","messagingSenderId":"827437669729","measurementId":"G-QNKKT58EN1"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions())]
};
